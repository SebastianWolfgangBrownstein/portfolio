import Link from 'next/link'

export const Header = ({
    links
}) => {
    return (
        <header className="absolute top-0 z-10 flex w-full items-center justify-between py-5 md:py-10 px-7 lg:px-20 xl:px-60">
            <Link href="/">
                <div>
                    <span className="text-5xl font-genos text-gold hover:cursor-pointer">
                        SEB
                    </span>
                </div>
            </Link>
            {links ? links : <></>}
        </header>
    );
};

export default Header;
