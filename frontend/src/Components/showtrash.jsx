import { useRecoilValueLoadable } from "recoil";
import { Trash } from "../recoil/atoms";

export function ShowTrash(){
    const Trashloadable = useRecoilValueLoadable(Trash)

    if (Trashloadable.state === "loading") {
        return <div>Loading...</div>;
    }

    if(Trashloadable.state === "hasValue"){
        const trash = Trashloadable.contents;
        return ( 
            <div className="grid grid-cols-4 gap-8 overflow-y-auto home ">
                {trash.map((note) => (
                    <div key={trash.id} className="bg-white rounded-lg shadow-md p-4 w-56  shadow-lg border border-slate-600 shadow-inner">
                        <h2 className="text-lg font-semibold mb-2">{trash.title}</h2>
                        <p className="text-gray-700">{trash.text}</p>
                    </div>
                ))}
            </div>
        );
    }

    if (Trashloadable.state === "hasError") {
        return <div>Error: Unable to load notes.</div>;
    }

    return null;
}