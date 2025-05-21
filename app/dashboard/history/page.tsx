import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import { TEMPLATE } from '../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import Image from 'next/image';
import { db } from '@/utils/db';
import CopyButton from '../content/_components/CopyButton';

export interface HISTORY {
    id: Number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string,
}

async function History() {
    const user = await currentUser();
    const HistoryList: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id));

    const GetTemplateName = (slug: string) => {
        const template: TEMPLATE | undefined = Templates?.find((item) => item.slug === slug);
        return template;
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>See your Previous Generative AI Content</p>
            <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>AI RESP</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>
            {HistoryList.map((item: HISTORY, index: number) => {
                const template = GetTemplateName(item.templateSlug);
                return (
                    <div key={index}>
                        <div className='grid grid-cols-7 my-5 py-3 px-3'>
                            <h2 className='col-span-2 flex gap-2 items-center'>
                                {template?.icon && (
                                    <Image 
                                        src={template.icon}
                                        width={25} 
                                        height={30} 
                                        alt={template.name || 'template icon'}
                                    />
                                )}
                                {template?.name || 'Unknown Template'}
                            </h2>
                            <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
                            <h2>{item.createdAt}</h2>
                            <h2>{item?.aiResponse.split(/\s+/).length}</h2>
                            <h2>
                                <CopyButton text={item.aiResponse} />
                            </h2>
                        </div>
                        {index < HistoryList.length - 1 && <hr />}
                    </div>
                );
            })}
        </div>
    )
}

export default History;