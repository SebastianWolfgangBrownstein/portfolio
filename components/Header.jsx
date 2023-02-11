import Link from 'next/link'


export const Header = () => {
    return (
        <header className="absolute top-0 z-10 flex w-full items-center justify-between py-2 px-4">
            <Link href="/">
                <div>
                    <span className="text-5xl font-genos text-ivory hover:cursor-pointer">
                        SEB
                    </span>
                </div>
            </Link>
        </header>
    );
};

export default Header;
