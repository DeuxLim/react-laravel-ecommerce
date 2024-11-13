export default function Sidebar(){
    const sections = {
        'MAIN MENU' : [
            {
                // TODO CREATE SECTIONS WITH ITEMS INSIDE
            }
        ],
    };
    console.log(sections);
    return(
        <div className="w-80 flex flex-col gap-4">

            {/* TOP */}
            <div className="h-20">
                <div className="bg-white h-full rounded-xl flex gap-2 p-3 border border-stone-200">

                    <div className="h-14 w-14 rounded-xl overflow-hidden bg-black">
                        
                    </div>

                    <div className="flex-grow">
                        <div className="text-lg text-gray-700 font-semibold"> Deux Daniel Lim </div>
                        <div className="text-xs text-gray-600 font-light"> deuxlim@email.com </div>
                    </div>

                </div>
            </div>

            {/* Middle */}
            <div className="flex-grow">
                <div>
                    
                </div>
            </div>


            {/* Footer */}
            <div className="">
                footer
            </div>
        </div>
    );
}