import React from "react";
import ServeLangItem from "./Helpers/ServeLangItem";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

function PaymentFail() {
  return <>
    <div className="flex justify-center sm:mt-[161px] mt-[60px]">
      <div className="p-[18px] h-auto bg-[#FFF1F1] border border-[#FA6978] sm:flex sm:space-x-[18px] items-center sm:mx-0 mx-5">
        <span>
          <svg
            width="79"
            height="65"
            viewBox="0 0 79 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.4185 15.6226C76.3986 14.6027 75.0423 14.041 73.5996 14.041H50.7251L44.1937 2.70945C43.2155 1.01219 41.4611 0 39.5 0C37.5389 0 35.7845 1.01219 34.8063 2.70945L28.2749 14.041H5.40039C3.95771 14.041 2.60145 14.6027 1.58154 15.6226C0.561641 16.6425 0 17.9987 0 19.4414V59.4043C0 60.847 0.561641 62.2032 1.58154 63.2231C2.60145 64.243 3.95771 64.8047 5.40039 64.8047H73.5996C75.0423 64.8047 76.3986 64.243 77.4185 63.2231C78.4384 62.2032 79 60.847 79 59.4043V52.4162C79 51.566 78.3072 50.8732 77.457 50.8732C76.6069 50.8732 75.9141 51.566 75.9141 52.4162V59.4043C75.911 60.6788 74.8726 61.7157 73.5996 61.7188H5.40039C4.12744 61.7157 3.08902 60.6788 3.08594 59.4043V34.7168H16.7969C16.6241 35.8932 16.8477 37.1064 17.471 38.1854C18.4493 39.878 20.2021 40.8887 22.1617 40.8887H56.8383C58.7979 40.8887 60.5507 39.878 61.529 38.1838C62.1523 37.1058 62.3759 35.893 62.2031 34.7168H75.9141V38.5295C75.9141 39.3812 76.6069 40.0724 77.457 40.0724C78.3072 40.0724 79 39.3812 79 38.5295V19.4414C79 17.9987 78.4384 16.6425 77.4185 15.6226ZM73.5996 17.127C74.8726 17.13 75.911 18.1669 75.9141 19.4414V23.916H56.417L52.5041 17.127H73.5996ZM5.40039 17.127H26.4959L22.583 23.916H3.08594V19.4414C3.08902 18.1669 4.12744 17.13 5.40039 17.127ZM3.08594 27.002H20.8045L18.1367 31.6309H3.08594V27.002ZM58.8565 36.6409C58.4369 37.3676 57.6823 37.8027 56.8383 37.8027H22.1617C21.3177 37.8027 20.5631 37.3676 20.1435 36.6409C19.7253 35.9188 19.7253 35.0563 20.1419 34.3326L37.4803 4.24934C37.8999 3.52105 38.656 3.08594 39.5 3.08594C40.344 3.08594 41.1001 3.52105 41.5197 4.24934L58.8581 34.3326C59.2747 35.0563 59.2747 35.9188 58.8565 36.6409ZM60.8633 31.6309L58.1955 27.002H75.9141V31.6309H60.8633Z"
              fill="#EF262C"
            />
            <path
              d="M77.457 47.0156C78.3092 47.0156 79 46.3248 79 45.4727C79 44.6205 78.3092 43.9297 77.457 43.9297C76.6049 43.9297 75.9141 44.6205 75.9141 45.4727C75.9141 46.3248 76.6049 47.0156 77.457 47.0156Z"
              fill="#EF262C"
            />
            <path
              d="M31.1679 47.9082H31.154C29.2685 47.9082 27.4354 48.3695 25.7073 49.2768C24.3726 49.9773 22.4054 51.5404 22.339 51.5928C19.7329 53.6635 16.9186 53.9736 15.4728 53.9736C15.121 53.9736 14.8448 53.9566 14.6751 53.9412C14.5871 53.932 14.277 53.8934 14.1952 53.8934C13.6768 53.8934 13.1954 54.1511 12.9099 54.58C12.9022 54.5877 12.8806 54.6093 12.842 54.6386C12.6553 54.7898 12.1708 55.0367 11.6401 55.1972C11.0985 55.3669 10.4859 55.4687 10.0045 55.4687H9.99063C9.55551 55.4734 9.24846 55.3777 9.17131 55.3314C9.16977 55.3144 9.16823 55.2944 9.16823 55.2697C9.15897 55.0799 9.28241 54.4812 9.81936 53.5724C10.7806 51.9107 11.5521 51.1037 12.0304 50.7195C12.5674 50.2905 12.869 50.2288 13.0696 50.2227C13.2393 50.2227 13.4098 50.2936 13.5965 50.4464C13.6968 50.5297 13.828 50.6902 13.8295 50.6933C14.1165 51.1299 14.5979 51.3891 15.121 51.3891C15.4126 51.3891 15.6981 51.3074 15.9449 51.15C16.664 50.6948 16.8784 49.7397 16.4233 49.0207C16.4233 49.0207 15.9141 48.3649 15.5762 48.0795C15.0655 47.6505 14.2083 47.1383 13.0588 47.1367C12.0652 47.1367 11.0306 47.5471 10.0848 48.3233C9.08491 49.1379 8.12364 50.3492 7.15002 52.0218C6.4202 53.2916 6.09155 54.293 6.08229 55.2712C6.08075 55.8298 6.21036 56.3652 6.45723 56.8173C6.91704 57.6736 7.69161 58.0717 8.11129 58.2338C8.6683 58.4498 9.26543 58.5516 9.99063 58.5547C10.9889 58.5516 12.0551 58.3479 13.075 57.9653C13.5796 57.7755 14.0116 57.5626 14.3958 57.3157C14.547 57.2154 14.6689 57.129 14.7785 57.041C15.0037 57.0534 15.239 57.0595 15.4751 57.0595C16.3669 57.0595 17.7626 56.967 19.3426 56.5226C21.137 56.0165 22.7896 55.171 24.2569 54.0106C24.2569 54.0106 26.056 52.5772 27.1392 52.011C28.4661 51.3197 29.7468 50.9957 31.1679 50.9941C32.0181 50.9941 32.7108 50.3013 32.7108 49.4512C32.7108 48.601 32.0181 47.9082 31.1679 47.9082Z"
              fill="#EF262C"
            />
            <path
              d="M69.7422 55.7793C70.5943 55.7793 71.2852 55.0885 71.2852 54.2363C71.2852 53.3842 70.5943 52.6934 69.7422 52.6934C68.89 52.6934 68.1992 53.3842 68.1992 54.2363C68.1992 55.0885 68.89 55.7793 69.7422 55.7793Z"
              fill="#EF262C"
            />
            <path
              d="M62.7987 55.7793C63.6509 55.7793 64.3417 55.0885 64.3417 54.2363C64.3417 53.3842 63.6509 52.6934 62.7987 52.6934C61.9465 52.6934 61.2557 53.3842 61.2557 54.2363C61.2557 55.0885 61.9465 55.7793 62.7987 55.7793Z"
              fill="#EF262C"
            />
            <path
              d="M55.8555 55.7793C56.7076 55.7793 57.3984 55.0885 57.3984 54.2363C57.3984 53.3842 56.7076 52.6934 55.8555 52.6934C55.0033 52.6934 54.3125 53.3842 54.3125 54.2363C54.3125 55.0885 55.0033 55.7793 55.8555 55.7793Z"
              fill="#EF262C"
            />
            <path
              d="M39.5 15.584C38.6498 15.584 37.957 16.2768 37.957 17.127V22.5273C37.957 23.3775 38.6498 24.0703 39.5 24.0703C40.3502 24.0703 41.043 23.3775 41.043 22.5273V17.127C41.043 16.2768 40.3502 15.584 39.5 15.584Z"
              fill="#EF262C"
            />
            <path
              d="M39.5 31.0156C40.3522 31.0156 41.043 30.3248 41.043 29.4727C41.043 28.6205 40.3522 27.9297 39.5 27.9297C38.6478 27.9297 37.957 28.6205 37.957 29.4727C37.957 30.3248 38.6478 31.0156 39.5 31.0156Z"
              fill="#EF262C"
            />
          </svg>
        </span>
        <div className="mt-[10px] flex flex-col">
          <h2 className="text-[24px] text-[#222222] font-bold">
            {ServeLangItem()?.Payment_Declined}
          </h2>
          <p className="text-[18px] text-[#797979]">
            {ServeLangItem()?.Oh_snap_The_Payment_Information_was_declined}
          </p>
          <Link href={"/store"} legacyBehavior>
            <Button
              variant="filled"
              className="bg-[var(--primary-color)] text-[var(--text-color)] mt-3 w-40"
            >
              Back to store
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </>;
}

export default PaymentFail;
