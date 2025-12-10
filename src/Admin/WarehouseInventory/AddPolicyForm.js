import React from 'react'

function AddPolicyForm({setopeningAddPolicyForm}) {
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
        <div className='bg-white p-5'>
              <div className="flex items-start mb-4 justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Inventory Policy</p>
          <button
            onClick={() => {
              setopeningAddPolicyForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div></div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
            //   addWarehouse();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Policy
          </button>
        </div>
        </div>
    </div>
  )
}

export default AddPolicyForm