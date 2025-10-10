import React from "react";

const ProjectsModule = () => {
  const projects = [
    { name: "Better Homes", client: "ABC Developers", paymentMode: "Monthly", startDate: "2024-05-10", estimatedDeliveryDate: "2024-12-20" },
    { name: "CodeQubrix Setup", client: "GoyzerCRM", paymentMode: "Fixed", startDate: "2024-07-15", estimatedDeliveryDate: "2025-01-10" },
    { name: "Addendum Tenancy", client: "RealEstate Corp", paymentMode: "Hourly", startDate: "2024-09-01", estimatedDeliveryDate: "2025-03-01" },
    { name: "Etisalat Portal", client: "Etisalat UAE", paymentMode: "Contract", startDate: "2024-04-05", estimatedDeliveryDate: "2024-11-15" },
    { name: "Korek Telecom Dashboard", client: "Korek Telecom", paymentMode: "Monthly", startDate: "2024-06-10", estimatedDeliveryDate: "2025-02-20" },
    { name: "Du CRM Integration", client: "Du Telecom", paymentMode: "Fixed", startDate: "2024-08-01", estimatedDeliveryDate: "2025-03-30" },
    { name: "Goyzer Property Platform", client: "Goyzer", paymentMode: "Retainer", startDate: "2024-03-15", estimatedDeliveryDate: "2025-01-31" },
    { name: "SmartRent Portal", client: "Dubai Properties", paymentMode: "Monthly", startDate: "2024-05-22", estimatedDeliveryDate: "2025-01-10" },
    { name: "Aldar Project Tracker", client: "Aldar Real Estate", paymentMode: "Contract", startDate: "2024-07-01", estimatedDeliveryDate: "2025-02-15" },
    { name: "Bayut Listing Manager", client: "Bayut", paymentMode: "Monthly", startDate: "2024-02-10", estimatedDeliveryDate: "2024-12-05" },
    { name: "Dubizzle API Integration", client: "Dubizzle", paymentMode: "Hourly", startDate: "2024-04-25", estimatedDeliveryDate: "2024-11-10" },
    { name: "Talabat Partner Dashboard", client: "Talabat", paymentMode: "Fixed", startDate: "2024-03-10", estimatedDeliveryDate: "2025-01-25" },
    { name: "Careem Driver Portal", client: "Careem", paymentMode: "Retainer", startDate: "2024-06-20", estimatedDeliveryDate: "2025-03-15" },
    { name: "Noon Seller Center", client: "Noon E-commerce", paymentMode: "Contract", startDate: "2024-05-05", estimatedDeliveryDate: "2025-02-28" },
    { name: "ADCB Digital Banking", client: "ADCB Bank", paymentMode: "Monthly", startDate: "2024-07-25", estimatedDeliveryDate: "2025-04-10" },
    { name: "Emirates NBD Portal", client: "Emirates NBD", paymentMode: "Fixed", startDate: "2024-04-12", estimatedDeliveryDate: "2025-01-20" },
    { name: "Mashreq Customer Portal", client: "Mashreq Bank", paymentMode: "Hourly", startDate: "2024-06-01", estimatedDeliveryDate: "2025-02-12" },
    { name: "Carrefour POS App", client: "Carrefour UAE", paymentMode: "Contract", startDate: "2024-03-08", estimatedDeliveryDate: "2025-01-05" },
    { name: "Expo 2025 Website", client: "Expo Management", paymentMode: "Fixed", startDate: "2024-02-15", estimatedDeliveryDate: "2025-05-01" },
    { name: "RTA Smart Parking", client: "RTA Dubai", paymentMode: "Retainer", startDate: "2024-08-10", estimatedDeliveryDate: "2025-06-30" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="block text-lg text-gray-600 mb-1">Search Project</label>
          <input
            type="text"
            placeholder="Type name of a project e.g. Excalibur"
            className="border-b border-blue-600 outline-none bg-transparent w-80 text-sm py-1"
          />
        </div>
        <div>
          <label className="block text-lg    text-gray-600 mb-1">Filter Projects/Vteams</label>
          <select className="border-b border-gray-400 outline-none bg-transparent text-lg">
            <option>All</option>
            <option>Projects</option>
            <option>Vteams</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Client</th>
              <th className="text-left p-3">Payment Mode</th>
              <th className="text-left p-3">Start Date</th>
              <th className="text-left p-3">Estimated Delivery Date</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{proj.name}</td>
                <td className="p-3">{proj.client}</td>
                <td className="p-3">{proj.paymentMode}</td>
                <td className="p-3">{proj.startDate}</td>
                <td className="p-3">{proj.estimatedDeliveryDate}</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-center p-3 text-sm text-gray-600">
          <span>Items per page: </span>
          <select className="mx-2 border-b outline-none bg-transparent">
            <option>20</option>
            <option>50</option>
          </select>
          <span>1 of 1</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModule;
