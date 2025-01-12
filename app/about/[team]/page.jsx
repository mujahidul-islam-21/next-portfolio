import { teamData } from '@/app/data/data';
import React from 'react';

function Page({ params }) {
  let mane = teamData.find(team => team.id == params.team);

  if (!mane) {
    return (
      <div className="text-red-500 text-xl text-center">Team not found</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-8">
        <img
          className="w-32 h-32 rounded-full border-4 border-blue-500"
          src={mane.image}
          alt={`${mane.name}'s picture`}
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-gray-900">{mane.name}</h2>
        <p className="text-lg font-semibold text-gray-600">{mane.title}</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 text-xl">
            <strong className="text-blue-600">About:</strong> {mane.about}
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 text-xl">
            <strong className="text-blue-600">Email:</strong>{' '}
            <a href={`mailto:${mane.email}`} className="text-blue-500">
              {mane.email}
            </a>
          </p>
          <p className="text-gray-700 text-xl">
            <strong className="text-blue-600">Phone:</strong> {mane.number}
          </p>
          <p className="text-gray-700 text-xl">
            <strong className="text-blue-600">Location:</strong> {mane.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 text-xl">
              <strong className="text-blue-600">Degrees:</strong>{' '}
              {mane.degrees.join(', ')}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 text-xl">
              <strong className="text-blue-600">Certifications:</strong>{' '}
              {mane.certifications.join(', ')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 text-xl">
              <strong className="text-blue-600">College:</strong> {mane.college}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 text-xl">
              <strong className="text-blue-600">Masters:</strong> {mane.masters}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
