import React from 'react'

export default function CustomModalPopup({ item, onClose }) {

    return <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">


        <div className='bg-white rounded-lg p-4 flex'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <img src={item.image_url} />
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
                        <p className="text-gray-800">{item.description}</p>
                    </div>

                </div>
                <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ">
                    Close
                </button>
            </div>
        </div>

    </div>

}




// return (
//     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-8 max-w-md overflow-hidden transform transition-opacity duration-300 ease-in-out">
//         <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
//         <p className="text-gray-800">{item.description}</p>
//         <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

