"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const fetchRandomVideo = async () => {
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    try {
      const response = await axios.post(`http://127.0.0.1:5000/youtube`, {
        query: selectedCategory,
      });
      setVideo(response.data.output);
      setError("");
    } catch (error) {
      console.error("Error fetching video:", error);
      setError("An error occurred while fetching the video.");
      setVideo(null);
    }
  };

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bordem Busters.</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Bordem Busters.</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
              Bordem Busters <br /> Here to entertain you.
            </h1>
          </div>
          <div className="hidden sm:mt-8 sm:flex sm:justify-center">
            <div className="px-3 mb-3">
              <div className="hidden sm:mt-8 sm:flex sm:justify-center">
                {/* Radio Buttons for Categories */}
                <div>
                  <input
                    type="radio"
                    id="category1"
                    name="category"
                    value="fun"
                    checked={selectedCategory === "fun"}
                    onChange={handleCategoryChange}
                  />
                  <label
                    className="mr-1 py-1 text-sm leading-6"
                    htmlFor="category1"
                  >
                    Fun
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="category2"
                    name="category"
                    value="music"
                    checked={selectedCategory === "music"}
                    onChange={handleCategoryChange}
                  />
                  <label
                    className="mr-1 py-1 text-sm leading-6"
                    htmlFor="category2"
                  >
                    Music
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="category3"
                    name="category"
                    value="football"
                    checked={selectedCategory === "football"}
                    onChange={handleCategoryChange}
                  />
                  <label
                    className="mr-1 py-1 text-sm leading-6"
                    htmlFor="category3"
                  >
                    Football
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="category4"
                    name="category"
                    value="scary"
                    checked={selectedCategory === "scary"}
                    onChange={handleCategoryChange}
                  />
                  <label
                    className="mr-1 py-1 text-sm leading-6"
                    htmlFor="category4"
                  >
                    Scary
                  </label>
                </div>
              </div>
              {/* Button to Trigger API Call */}
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-white-900/10 hover:ring-gray-900/20">
                <a
                  href="#"
                  className="font-semibold text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    fetchRandomVideo();
                  }}
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  STOP ME FEELING BORED! <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* Display the video or error message */}
            {video && (
              <div>
                <br />
                <div>
                  <h2>{video?.title}</h2>

                  <video
                    src={video?.video} // Path to your video file in the public directory
                    autoPlay
                    // muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "auto" }} // Adjust styling as needed
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
