type IconCardProps = {
    icon: string
    text: string
}
export default function IconCard(props: IconCardProps) {
    return (
        <div className="mt-24">
            <div className="flex justify-center">
                <img src={props.icon} />
            </div>
            <div className="flex justify-center">
                <p className="w-40 text-center">{props.text}</p>
            </div>
        </div>
    )
} 
