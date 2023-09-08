import Link from 'next/link';
import { XIcon, UndoIcon } from '@sebthedev/swanky-icons'


const ContactActions = ({
    onReset
}) => {

    return (
        <div className="w-40 space-x-10 flex justify-end">
            <button type="reset" onClick={onReset}>
                <UndoIcon 
                    width={20}
                    height={20}
                    fillColor="#d6ad30"
                    title="UndoIcon"
                />
            </button>
            <Link href="/" role="button">
                <XIcon 
                    width={22}
                    height={22}
                    fillColor="#d6ad30"
                    title="CloseIcon"
                />
            </Link>
        </div>
    )
}

export default ContactActions;