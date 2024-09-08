import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
var urli = "";
var urlv = "";
const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [imghh, setImghh] = useState();
  const [vidhh, setVidhh] = useState();
  const [categories, setCategories] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const contract = useSelector((state) => state.user.contractInstance);
  // console.log('bekar')
  console.log(contract);
  const updateValueAtIndex = (index, newValue) => {
    // Creating a copy of the array using spread (...) operator
    const newArray = [...categories];

    // Updating the value at the specified index
    newArray[index] = newValue;

    // Updating the state with the new array
    setCategories(newArray);
  };
  // const handleSubmit1 = async () => {
  //   // const fileStream = await fs.readFileSync("./krypc.jpeg");
  //   var imghash;
  //   var vidhash;
  //   if (urli) {
  //     // try {
  //     //   const formData11 = new FormData();
  //     //   formData11.append("file", urlv);

  //     //   const resFile = await axios({
  //     //     method: "post",
  //     //     url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //     //     data: formData11,
  //     //     headers: {
  //     //       pinata_api_key: "6386f9cf09f47f201dd7",
  //     //       pinata_secret_api_key:
  //     //         "25ba9c91298d402e25d8305f9455f23b94a2d20bf6c7c330a175ea243fbfa051",
  //     //       "Content-Type": "multipart/form-data",
  //     //     },
  //     //   });

  //     //   vidhash = resFile.data.IpfsHash;
  //     // }
  //     // catch (e) {
  //     //   console.log(e)
  //     // }
  //     const fileReader = new FileReader();
  //     fileReader.onload = async () => {
  //       // 'fileReader.result' contains the contents of the file as ArrayBuffer
  //       const fileContents = fileReader.result;

  //       // Now you can use 'fileContents' as needed
  //       console.log(fileContents);

  //       // Create a Blob from the ArrayBuffer
  //       const fileBlob = new Blob([fileContents], { type: urli.type });
  //       console.log(urli);
  //       // Set the Blob to state or perform other actions
  //       try {
  //         console.log("In upload file API");
  //         const headers = {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: "3fc1ff34-12d1-4484-9b53-171420d24c9a",
  //           Instanceid: "INS_ST_147_2024122",
  //         };
  //         const url =
  //           "https://api.krypcore.com/api/v0/storagemanageripfs/storefile";
  //         const formData = new FormData();
  //         formData.append("files", fileBlob, urli.name);
  //         const response = await axios.post(url, formData, { headers });
  //         imghash = response.data.Data;
  //         console.log(imghash)
  //          const gas = await contract.uploadVideo(
  //             imghash,
  //             vidhash,
  //             Number(duration),
  //             title,
  //             description,
  //             categories[0],
  //             categories[1],
  //             categories[2],
  //             categories[3],
  //             categories[4],
  //             categories[5]
  //           );
  //           console.log(gas);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fileReader.readAsArrayBuffer(urli); // Use readAsText for text files
  //   }
  //   // console.log(imghash)
  //   // console.log(duration)
  //   // console.log(title)
  //   // console.log(description)
  //   // console.log(categories)
  // };
  const handleSubmit = async () => {
    var imghash;
    var vidhash;
    if (urli) {
      try {
        const formData = new FormData();
        formData.append("file", urli);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "6386f9cf09f47f201dd7",
            pinata_secret_api_key:
              "25ba9c91298d402e25d8305f9455f23b94a2d20bf6c7c330a175ea243fbfa051",
            "Content-Type": "multipart/form-data",
          },
        });

        imghash = resFile.data.IpfsHash;
        setImghh(imghash)
        // const formData11 = new FormData();
        // formData11.append("file", urlv);

        // const resFile11 = await axios({
        //   method: "post",
        //   url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        //   data: formData11,
        //   headers: {
        //     pinata_api_key: "6386f9cf09f47f201dd7",
        //     pinata_secret_api_key:
        //       "25ba9c91298d402e25d8305f9455f23b94a2d20bf6c7c330a175ea243fbfa051",
        //     "Content-Type": "multipart/form-data",
        //   },
        // });

        // vidhash = resFile11.data.IpfsHash;
        // setVidhh(vidhash);
        // console.log(vidhash);
        // console.log(imghash);
        const gas = await contract.uploadVideo(
          imghash,
          imghash,
          Number(duration),
          title,
          description,
          categories[0],
          categories[1],
          categories[2],
          categories[3],
          categories[4],
          categories[5]
        );
        console.log(gas);
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="bg-cyan-900 m-8 rounded-xl p-8">
        <form className="">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Video title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Your Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Duration
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="In Seconds"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 h-52">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-cyan-900 border border-gray-200 rounded p-20 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                type="text"
                placeholder="Write Description...."
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 h-52">
            <div className="w-full px-3 flex justify-start">
              <fieldset>
                <legend className="text-md font-semibold leading-6 text-white">
                  Category
                </legend>
                <p className="mt-1 text-sm  text-gray-200">
                  Choose category your video belongs to:
                </p>
                <div className="flex flex-row mt-6 space-y-6 justify-evenly">
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        onClick={() => {
                          updateValueAtIndex(0, true);
                        }}
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Gaming
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        onClick={() => {
                          updateValueAtIndex(1, true);
                        }}
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Movie
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        onClick={() => {
                          updateValueAtIndex(2, true);
                        }}
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Music
                      </label>
                    </div>
                  </div>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        onClick={() => {
                          updateValueAtIndex(3, true);
                        }}
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Comedy
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        onClick={() => {
                          updateValueAtIndex(4, true);
                        }}
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Action
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        onClick={() => {
                          updateValueAtIndex(5, true);
                        }}
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Education
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Upload Video
                  </h2>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        {/* <!-- SVG path data --> */}
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className=""
                      onChange={(e) => {
                        // setUrli(e.target.files[0])
                        urli = e.target.files[0];
                        console.log(urli);
                      }}
                    />
                  </label>
                </div>
                {/* <div className="w-full md:w-1/2 px-3">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Upload Video
                  </h2>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        mp4 or videos
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        urlv = e.target.files[0];
                      }}
                    />
                  </label>
                </div> */}
                <div className="m-4">
                  <button
                    className="bg-blue-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-l"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Upload
                  </button>
                </div>
              </div>

              {/* </div>
                </div>
              </div> */}
            </div>
            {/* <div className="flex flex-col"></div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadVideo;
