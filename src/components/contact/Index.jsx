import { Copy, Figma, Github, Mail, Phone, Twitter } from "./Icons";

export default function Contact() {
  return (
    <div id="contact" className="py-24 px-8 flex flex-col items-center">
        <div className="flex flex-col items-center">
            <span className=" bg-gray-200 dark:bg-gray-700 px-5 py-1 rounded-2xl text-gray-600 dark:text-gray-300  mb-4">Get in touch</span>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-light mb-12 max-w-[576px] text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        </div>
        <div className="flex flex-col items-center gap-4 mb-12">
            <div className=" flex gap-5 items-center">
                <Mail />
                <h1 className="md:text-4xl text-lg font-semibold">tom@pinecone.mn</h1>
                <Copy />
            </div>
            <div className=" flex gap-5 items-center">
                <Phone />
                <h1 className="md:text-4xl text-lg font-semibold">+976 99119911</h1>
                <Copy />
            </div>
        </div>
        <div className="flex flex-col items-center gap-3">
         <p className="text-gray-600 dark:text-gray-300  md:text-lg font-light text-center">You may also find me on these platforms:</p>
         <div className="flex gap-3">
            <Github />
            <Twitter />
            <Figma />
         </div>
        </div>
        
    </div>
  )
}
