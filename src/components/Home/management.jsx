import Image from 'next/image';

function Management() {
  return (
    <div className='flex bg-white justify-center items-center'>
    <div className="grid w-[65%] max-lg:w-[80%] max-sm:w-[80%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-lg:gap-6 justify-center bg-white text-black p-6">
    {/* Box 1 */}
    <div className="w-full sm:w-auto px-6 py-8 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-100">
      <Image src="/community/1.png" alt="Logo" width={50} height={50} className="object-cover mb-4" />
      <h1 className="text-lg font-bold text-center mb-2">Membership Organisation</h1>
      <p className="text-center text-sm mb-4">Automates membership renewals and payments</p>
    
    </div>
  
    {/* Box 2 */}
    <div className="w-full sm:w-auto px-6 py-8 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-100">
      <Image src="/community/2.png" alt="Logo" width={50} height={50} className="object-cover mb-4" />
      <h1 className="text-lg font-bold text-center mb-2">National Association</h1>
      <p className="text-center text-sm mb-4">Automates membership renewals and payments</p>
     
    </div>
  
    {/* Box 3 */}
    <div className="w-full sm:w-auto px-6 py-8 flex flex-col items-center justify-center rounded-lg shadow-lg bg-gray-100">
      <Image src="/community/3.png" alt="Logo" width={50} height={50} className="object-cover mb-4" />
      <h1 className="text-lg font-bold text-center mb-2">Clubs and Groups</h1>
      <p className="text-center text-sm mb-4">Automates membership renewals and payments</p>
     
    </div>
  </div>
  </div>
  
  
  );
}

export default Management;
