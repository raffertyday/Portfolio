import ProjectBox from '@/components/project-section'
import certificate1 from '@/public/images/Udemy1.jpg'
import Image from 'next/image'


export default function Projects() {

    return (
        <>
        <h1>
        MY PROJECTS
        </h1>
        <ProjectBox />
        <Image className='certificate1' src={certificate1} width={1365} height={700} alt='fullstack webdev qualification certificate' />
        </>
    )
}
