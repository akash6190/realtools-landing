import React from 'react';

const customers = [
  {
    id: '0',
    image: "https://i.pravatar.cc/40?img=1",
    name: 'John Doe',
    email: 'johndoe@example.com',
    spent: '2,890.66',
  },
  {
    id: '1',
    image: "https://i.pravatar.cc/40?img=2",
    name: 'Maveric',
    email: 'maverick@example.com',
    spent: '2,767.04',
  },
  {
    id: '2',
    image: "https://i.pravatar.cc/40?img=3",
    name: 'Mithilla',
    email: 'mithilla@example.com',
    spent: '2,996.00',
  },
  {
    id: '3',
    image: "https://i.pravatar.cc/40?img=4",
    name: 'Simran',
    email: 'simran@example.com',
    spent: '1,220.66',
  },
  {
    id: '4',
    image: "https://i.pravatar.cc/40?img=5",
    name: 'Raj',
    email: 'raj@example.com',
    spent: '1,890.66',
  },
];

const TopCustomersCard: React.FC = () =>{


  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-md hover:shadow-lg rounded-10">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Customers</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-cta">{customer.spent}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default TopCustomersCard;