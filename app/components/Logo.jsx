import { Link } from '@heroui/react'

export function Logo(){
    return(
        <Link href="/">
            <img
                alt="logo"
                style={{ maxWidth: "fit-content", padding: 0 }}
                src="/images/logo.png"
            />  
        </Link>
    )
}