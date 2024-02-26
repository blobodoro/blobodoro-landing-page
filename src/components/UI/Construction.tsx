import Image from 'next/image';

const Construction = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-start bg-white">
            <div className="text-center">
                <div className="flex items-center justify-center mt-[20%] mx-2">
                    <Image src="/img/construction-blob.png" alt='' width={500} height={500} />
                </div>
                <span className="block text-3xl font-[Quantico] mt-4 text-blobPink font-extralight">Page Currently Under Construction</span>
            </div>
        </div>
    );
};

export default Construction;
