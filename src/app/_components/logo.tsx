import Image from "next/image";

export default function Logo({className}: {className?: string}) {
    return (
        <div>
            <Image src='/delogo.svg' width={48} height={48} alt="deverb logo light" className={className} />
        </div>
    )
}

