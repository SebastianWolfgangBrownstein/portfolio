import Link from 'next/link'


export const Header = () => {
    return (
        <header className="absolute top-0 z-10 flex w-full items-center justify-between py-2 px-4">
            <Link href="/">
                <div>
                    <span className="bg-gradient-to-b from-amethyst to-ivory bg-clip-text text-transparent hover:cursor-pointer">
                        Seb
                    </span>
                </div>
            </Link>
        </header>
    );
};

export default Header;
