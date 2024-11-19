import classes from './project-section.module.css'
import Link from 'next/link'

export default function ProjectBox() {
    return (
        <>
        <div className={classes.main}>
            <h4>FRONT END</h4>
            <p><Link href="https://github.com/raffertyday/CardsGoneDigital">CardsGoneDigital web-app</Link></p>
            <p><Link href="https://github.com/raffertyday/DotzWebsite">Dotz `&quot;`10 % mentorship`&quot;` web-app</Link></p>
            <p><Link href="https://github.com/raffertyday/tradingview-sign-in-design">TradingView Sign-in page</Link></p>
            <h4>BACK END</h4>
            <p><Link href="https://github.com/raffertyday/API-Jokes">Joke genarator using API</Link></p>
            <p><Link href="https://github.com/raffertyday/Travel-Tracker">Travel tracker using PostgreSQL DB injections</Link></p>
            <h4>FULLSTACK</h4>
            <p><Link href="https://github.com/raffertyday/BLOG">Blog app</Link></p>
            <p><Link href="https://github.com/raffertyday/Foodies">Foodies web-app</Link></p>
        </div>
        </>
    )
}