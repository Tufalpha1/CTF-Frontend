"use client";
import React, { useState, useEffect, useRef, Component } from "react";
import Link from "next/link";
import { EvervaultCard, Icon } from "../components/EvervaultCard";
import Leaderboard from "../components/Leaderboard";
import Latest from "../components/Latest";
import keys from "../lib/variables";
import audioBlood from "../public/audio.mp3";
import useSound from "use-sound";
import { Solves_and_firstBlood, leaderboard } from "../lib/data";
import { Bug, SquareTerminal, Binary, FileDigit, Fingerprint, GlobeLock } from "lucide-react"
import bugbountypro from "../public/assets/sponsors/burp-bounty-pro.png";
import digitalocean from "../public/assets/sponsors/digital-ocean.png";
import letsdefend from "../public/assets/sponsors/lets-defend.png";

const Home = () => {
  // const [showFirstBlood, setShowFirstBlood] = useState(false);
  // const [showNewLeader, setShowNewLeader] = useState(false);
  // const [newLeader, setNewLeader] = useState({});
  // const [firstBloodChallenge, setFirstBloodChallenge] = useState({});
  // const { BACKEND_URL } = keys;
  // const [play] = useSound(audioBlood);
  // const getData = async () => {
  //   try {
  //     console.log(`URL is ${BACKEND_URL}`);
  //     const res = await fetch(`${BACKEND_URL}/api/blood`);

  //     if (!res.ok) {
  //       throw new Error(`Error: ${res.status} - ${res.statusText}`);
  //     }
  //     const data = await res.json();
  //     setFirstBloodChallenge(data);
  //     console.log(data);
  //     if(data.first_blood) {
  //       setShowFirstBlood(true);
  //     }
  //   } catch (err) {
  //     console.error(err)
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //   if (showFirstBlood) {
  //     const audio = new Audio("/audio.mp3");
  //     audio.play()
  //     setTimeout(() => {
  //       setShowFirstBlood(false);
  //     }, 15000);
  //   }
  // }, [showFirstBlood, firstBloodChallenge]);

  // useEffect(() => {
  //   if (showNewLeader) {
  //     setTimeout(() => {
  //       setShowNewLeader(false);
  //     }, 15000);
  //   }
  // }, [showNewLeader, newLeader]);

  // useEffect(() => {
  //   console.log(showFirstBlood)
  // }, [firstBloodChallenge, showFirstBlood]);

  const firstBloodChallenge = Solves_and_firstBlood[0];
  const showNewLeader = leaderboard.new_leader;

  const showFirstBloodFunc = () => {
    if (!firstBloodChallenge.firstBlood) {
      return (
        <div className="relative py-20 flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#AA0000] before:dark:opacity-10 after:dark:from-[#AA0000] after:dark:via-[#AA0000] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="uppercase glow-text-red text-8xl font-extrabold tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            First Blood!
          </h1>
          <div className="w-full mx-auto sm:w-[72rem] -mt-4 relative">
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#AA0000] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#AA0000] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
          <h3 className="py-12 text-3xl font-extrabold text-center">
            CHALLENGE{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
              {firstBloodChallenge.chal_name}
            </span>{" "}
            SOLVED BY{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
              {firstBloodChallenge.solved_by}.{" "}
            </span>
            {firstBloodChallenge.points} POINTS FOR TEAM{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#AA0000]">
              {firstBloodChallenge.team_name}.
            </span>
          </h3>
        </div>
      );
    } else if (!showNewLeader) {
      return (
        <div className="py-20">
          <h1 className="uppercase glow-text-blue text-8xl font-extrabold tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            New Leader!
          </h1>
          <div className="w-full mx-auto sm:w-[72rem] -mt-4 relative">
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#3c8ce7] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-32 bg-gradient-to-r from-transparent via-[#3c8ce7] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-96 bg-gradient-to-r from-transparent via-[#00eaff] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
          <h3 className="py-12 text-3xl text-center font-extrabold">
            TEAM{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#3c8ce7] from-[#00eaff]">
              {leaderboard.leader?.name}
            </span>{" "}
            HAS TAKEN THE LEAD WITH{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#3c8ce7] from-[#00eaff]">
              {leaderboard.leader?.points}
            </span>{" "}
            POINTS.
          </h3>
        </div>
      );
    } else {
      return (
        <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div className="z-30 w-24 h-24 py-6 my-8 sm:w-40 sm:h-40 -top-0 lg:-top-16 relative aspect-square rounded-full size-16 sm:size-24 md:size-40 sm:mt-14 lg:mt-24 sm:py-4 flex border mx-auto bg-slate-950 border-[#45159f]/50 before:absolute before:-inset-2 before:border before:border-[#45159f]/15 before:bg-white/5 before:rounded-full">
            <svg className="w-20 sm:w-auto p-1 -mt-2 sm:p-3 sm:mt-0 h-fit mx-auto" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="text-slate-400 " d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z" fill="currentColor"></path>
              <g clipPath="url(#clip0_0_1)">
                <path d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z" fill="url(#paint0_linear_0_1)"></path>
              </g>
              <path className="text-[#a737ff]" d="M3 72H209" stroke="currentColor" strokeWidth="6" strokeLinecap="round"></path>
              <defs>
                <linearGradient id="paint0_linear_0_1" x1="106.385" y1="1.34375" x2="106" y2="72" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0" style={{ color: "none", stopOpacity: 0 }}></stop>
                  <stop className="text-[#a737ff] " offset="1" stopColor="currentColor"></stop>
                </linearGradient>
                <clipPath id="clip0_0_1">
                  <rect width="129" height="72" fill="white" style={{ fill: "#a737ff", fillOpacity: 0.2 }} transform="translate(41)"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="uppercase font-heading linear-wipe text-center mx-auto pb-4 text-3xl sm:text-6xl lg:text-8xl">
            Airoverflow CTF 2024
          </h1>
          <p className="uppercase text-center tracking-widest text-xl 2xl:text-2xl max-w-3xl mx-auto text-slate-300">
            Hack harder
          </p>

          <div className="w-full mx-auto sm:w-[30rem] -mt-[0.26rem] relative">
            <div className="absolute inset-x-20 sm:inset-x-20 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[2px] sm:h-[3px] w-1/2 sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-20 sm:inset-x-20 bg-gradient-to-r from-transparent via-[#cc0097] to-transparent h-[1px] sm:h-[2px] w-1/2 sm:w-3/4" />
            <div className="absolute inset-x-28 sm:inset-x-44 bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[5px] sm:h-[7px] w-1/4 sm:w-[25%] blur-sm" />
            <div className="absolute inset-x-28 sm:inset-x-44 bg-gradient-to-r from-transparent via-[#ff00be] to-transparent h-[1px] sm:h-[2px] w-1/4 sm:w-[25%]" />
          </div>
        </div>
      );
    }
  };

  return (
    <main className="relative px-16 py-4 w-full min-h-screen overflow-hidden">
      {showFirstBloodFunc()}
      <div className="flex mt-12 place-content-evenly mx-auto gap-8 max-w-3xl">
        <Link href="/scoreboard">
          <button className="mx-auto flex items-center gap-2 px-8 py-2 rounded-full relative bg-black text-slate-100 text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#ff00be] to-transparent" />
            <span className="relative z-20 uppercase text-sm tracking-widest">Scoreboard</span>
            <svg
              fill="none"
              height="18"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </Link>
      </div>
      <h1 className="uppercase text-xl sm:text-3xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
        Sponsors
      </h1>
      <div className="xl:flex">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <EvervaultCard image={bugbountypro.src} background="bg-gradient-to-r from-[#e3613e] to-[#014d6f]" />
          <p className="text-lg mx-auto text-center font-light mt-4 text-black dark:text-slate-200 px-2 py-0.5">
            Burp Bounty Pro
          </p>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <EvervaultCard image={digitalocean.src} className="w-40" background="bg-gradient-to-r from-[#0180ff] to-[#0059b2]" />
          <p className="text-lg mx-auto text-center font-light mt-4 text-black dark:text-slate-200 px-2 py-0.5">
            Digital Ocean
          </p>
        </div>

        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <EvervaultCard image={letsdefend.src} background="bg-gradient-to-r from-[#069be0] to-[#04bdae]" />
          <p className="text-lg mx-auto  text-center font-light mt-4 text-black dark:text-slate-200 px-2 py-0.5">
            Let's Defend
          </p>
        </div>
      </div>
      <div className="py-20 ">
        <h1 className="uppercase text-xl sm:text-3xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
          Categories
        </h1>
        <div className="container max-w-5xl mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:gap-y-8 mx-auto">
          <div className="btn"><a href="#" className="flex flex-row gap-4 items-center justify-center mx-auto"><Bug /> PWN </a></div>
          <div className="btn"><a href="#" className="flex flex-row gap-4 items-center justify-center"><Binary /> REV </a></div>
          <div className="btn"><a href="#" className="flex flex-row gap-4 items-center justify-center"><SquareTerminal /> WEB </a></div>
          <div className="btn"><a href="#" className="flex flex-row gap-4 items-center justify-center"><FileDigit /> CRYPTO </a></div>
          <div className="btn"><a href="#" className="flex flex-row gap-4 items-center justify-center"><Fingerprint /> FORENSICS </a></div>
          <div className="btn"><a href="#" className="flex flex-row gap-4 items-center justify-center"><GlobeLock /> OSINT </a></div>
        </div>
      </div>

      <h1 className="uppercase text-xl sm:text-3xl mt-24 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center my-12">
        Challenges Creators
      </h1>
      <ol className="text-center grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-8 place-content-center  mx-auto text-xs max-w-5xl">
        <li className="my-1">
          TheFlash2K
        </li>
        <li className="my-1">
          72Ghoul
        </li>
        <li className="my-1">
          hash3liZer
        </li>
        <li className="my-1">
          CY3ORG
        </li>
        <li className="my-1">
          MikiVirus
        </li>
        <li className="my-1">
          n1ghtCrawl3r
        </li>
        <li className="my-1">
          TheGriffyn
        </li>
        <li className="my-1">
          ahmedjalil
        </li>
      </ol>
      {/* <Leaderboard setNewLeader={setNewLeader} setShowNewLeader={setShowNewLeader}  /> */}
      {/* <div className="flex flex-row items-start gap-14 overflow-x-auto">
    <Leaderboard />
    <Latest />
  </div> */}
      <p className="pt-6 text-center mx-auto text-sm">Built by <Link href="https://zains.social" className="linear-wipe tracking-wide">Tufalpha1<span className="text-lg font-extrabold">&#8599;</span></Link></p>
    </main>
  );
};

export default Home;
