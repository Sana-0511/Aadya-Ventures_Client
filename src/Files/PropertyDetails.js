import React, { useEffect, useState } from 'react';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [readCounter, setReadCounter] = useState(0); // Counter state variable
  const housesCollectionRef = collection(db, 'PropertyRecord');

  useEffect(() => {
    // Fetch data from Firestore only when the component mounts
    const getHouse = async () => {
      try {
        const docRef = doc(housesCollectionRef, id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setHouse({ ...docSnapshot.data(), id: docSnapshot.id });
        }
        // Increment the read counter each time data is fetched from Firestore
        setReadCounter((prevCounter) => prevCounter + 1);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    if (id && !house) {
      getHouse();
    }
  }, [id, house, housesCollectionRef]);

  if (!house) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  // Log the number of reads to the console
  console.log('Number of Reads:', readCounter);
  return (
    <div className="flex justify-center max-w-[1300px] h-max">
      <div className="flex flex-col justify-center mt-[90px] md:w-[480px] min-h-[550px] mb-14 md:max-h-[700px]">
        <div className="flex justify-center flex-col lg:flex-row gap-6">
          <div className="max-w-[768px]">
            <div>
              <h2 className="mb-3 text-[47px] font-semibold">{house.propertyName}</h2>
              <div className="mb-3">
                <div className="bg-black rounded-full text-white px-3 mr-3 inline-block">
                  {house.propertyType}
                </div>
                <div className="bg-slate-200 rounded-full text-black font-semibold px-3 inline-block">
                  {house.state}
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-x-2 items-center">
              <BiArea className="font-medium" />
              <div className="text-lg text-xl">{house.area} sq feet</div>
            </div>
            <div className="w-[400px] mt-6 mb-4">
              <p className="mb-[5px] whitespace-pre-line">{house.description}</p>
              <a
                href={house.mapLocation}
                className="text-cyan-700 underline mb-[50px]"
                style={{ wordWrap: 'break-word' }}
              >
                {house.mapLocation}
              </a>
            </div>
            <div className="mt-6 bg-white rounded-lg shadow-md p-4">
              <p className="mb-2">
                <strong>Email:</strong> {house.email}
              </p>
              <p>
                <strong>Phone:</strong> {house.phone}
              </p>
            </div>
          </div>
          <div className="flex justify-end ">
  {house.propertyImages.length > 0 ? (
    <Carousel
      showArrows={true}
      showThumbs={false}
      className=" w-[400px] lg:w-[500px] xl:w-[500px] xl:ml-[100px] xl:mr-[-200px]  flex justify-center" // Add 'flex justify-center' classes
    >
      {house.propertyImages.map((image, index) => (
        <div key={index} className="flex justify-center "> {/* Add 'flex justify-center' class */}
          <img src={image} alt={`Property ${index + 1}`} className="max-w-full max-h-full" /> {/* Add 'max-w-full max-h-full' classes */}
        </div>
      ))}
    </Carousel>
  ) : (
    <div>No images available</div>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;