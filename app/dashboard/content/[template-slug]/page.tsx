"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModals';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';

interface PROPS {
    params: {
        'template-slug': string
    }
}

function CreateContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) =>
        item.slug === props.params['template-slug']);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const router = useRouter();

    const GenerateAIContent = async (formData: any) => {
        if (totalUsage >= 10000) {
            console.log("Please Upgrade !!! ");
            router.push('/dashboard/billing');
            return;
        }
        
        setLoading(true);
        setAiOutput(''); // Clear previous output
        
        try {
            const SelectedPrompt = selectedTemplate?.aiPrompt;
            const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
            const result = await chatSession.sendMessage(FinalAIPrompt);
            setAiOutput(result?.response.text());
            await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
        } catch (error) {
            console.error("Error generating content:", error);
            setAiOutput("Error generating content. Please try again.");
        } finally {
            setLoading(false); // This will always run
        }
    }

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        try {
            const result = await db.insert(AIOutput).values({
                formData: JSON.stringify(formData), // Fixed: stringify the formData
                templateSlug: slug,
                aiResponse: aiResp,
                createdBy: user?.primaryEmailAddress?.emailAddress, // Fixed: changed from createBy to createdBy
                createdAt: moment().format('DD/MM/yyyy'),
            });
            console.log("Saved to DB:", result);
        } catch (error) {
            console.error("Error saving to database:", error);
        }
    }

    return (
        <div className='p-10'>
            <Link href={'/dashboard'} className='flex items-center gap-2'>
                <ArrowLeft />Back
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection 
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loading={loading}
                />
                <div className='col-span-2'>
                    <OutputSection 
                        aiOutput={aiOutput}
                        loading={loading} // Make sure OutputSection accepts loading prop
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateContent;