import GitLogo from '@/public/images/github-mark-white.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Card2() {
    return (
        <div className="content-card1">
            <h2><span><Image className='xlogo'width={20} height={20} src={GitLogo}/></span> GitHub</h2>
            <p>Username: </p>
            <p><Link href="https://github.com/raffertyday">@raffertyday</Link></p>
            <p>To take a deeper look into all my files and activity.</p>
        </div>
    )
}