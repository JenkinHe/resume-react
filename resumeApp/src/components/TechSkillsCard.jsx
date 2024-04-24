import React from 'react'

export default function TechSkillsCard({ skillItem }) {
    return <div className="flex flex-row w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded=2xl border-white">
        <div className="h-40 flex justify-center overflow-hidden items-contain rounded-xl">
            <img src={skillItem?.image_url} alt="image" className="block w-full h-auto object-contain" />
        </div>
        <div>
            
            <h3 className="font-bold text-2xl truncate text-black px-10">{skillItem?.name}</h3>
            <p>{skillItem.description}</p>
        </div>
    </div>
}
