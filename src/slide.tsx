type slideProps = {
    picURL: string
}
export default function Slide(props: slideProps) {
    return (
        <div className="flex justify-center">
            <img src={props.picURL} className="rounded-xl w-96"/>
        </div>
    )
}