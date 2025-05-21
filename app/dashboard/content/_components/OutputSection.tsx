import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import CopyButton from './CopyButton'


interface props{
  aiOutput:string,
}
function OutputSection({aiOutput}:props) {
  const editorRef:any=useRef();
  useEffect(()=>{
  const editorInstance=editorRef.current.getInstance()
  editorInstance.setMarkdown(aiOutput);

  },[aiOutput])

  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
       <CopyButton text={aiOutput}/>
      </div>

      <Editor
      ref={editorRef}
  initialValue="Your Result will appear here "
    
      height="600px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}/>
    </div>
  )
}

export default OutputSection