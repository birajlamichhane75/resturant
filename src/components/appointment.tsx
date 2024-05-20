import React from 'react';

const AppointmentSection = () => {
  return (
    <section className="ftco-appointment relative bg-[#f5a14e3d] py-16">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='right-image' >
            
          <img src=" ./assets/mainbaneer.jpg" alt="" className='w-full h-full object-cover rounded-md' loading='lazy' />
          </div>
          <div>
            <div className="appointment ftco-animate fadeInUp ftco-animated pt-3">
              <h3 className="mb-4 text-xl font-semibold">Book a Table</h3>
              <form action="#" className="appointment-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" className="form-control w-full py-2 px-4 rounded-md" placeholder="First Name" />
                  </div>
                  <div>
                    <input type="text" className="form-control w-full py-2 px-4 rounded-md" placeholder="Last Name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-6">
                  <div>
                    <input type="date" className="form-control w-full py-2 px-4 rounded-md" placeholder="Date" />
                  </div>
                  <div>
                    <input type="time" className="form-control w-full py-2 px-4 rounded-md" placeholder="Time" />
                  </div>
                  <div>
                    <input type="text" className="form-control w-full py-2 px-4 rounded-md" placeholder="Phone" />
                  </div>
                </div>
                <div className="mt-6">
                  <textarea name="" id=""  className="form-control w-full py-2 px-4 pt-8 pb-12 rounded-md" placeholder="Message"></textarea>
                </div>
                <div className="mt-6">
                 
                  <input className="btn btn-primary py-2 px-4 rounded-md btn-lg btn-block text-white bg-[#e65b00] rounded-r-lg p-3 pr-8" value="Appointment" type="submit"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
