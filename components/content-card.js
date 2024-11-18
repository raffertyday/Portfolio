import XPost from '@/public/images/xPost.png'
import XLogo from '@/public/images/logo-white.png'
import Image from 'next/image'
import Link from 'next/link'



export default function Card() {
    return (
      
        <div className="content-card1">
            <h2><span><Image className='xlogo'width={20} height={20} src={XLogo}/></span> Twitter/X</h2>
            <p>Username: </p>
            <p><Link href="https://x.com/TCTrader_">@TCTrader</Link></p>
            <p>A fun place to keep up to date with personal progress and individual projects.</p>
        </div>
        
    )
}