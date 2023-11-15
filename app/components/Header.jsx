"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import SearchField from "./Search";
import { useSelector } from "react-redux";

const products = [
  {
    name: "Лавочки",
    description: "Уличные скамьи на любой вкус",
    href: "/catalog?category=bench",
    icon: (
      <svg
        width="96"
        height="72"
        viewBox="0 0 96 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88.318 37.7L29.846 3.94201L23.569 0.317007C23.507 0.282007 23.438 0.264008 23.369 0.264008C23.3 0.264008 23.231 0.282007 23.169 0.317007L0.927997 13.159C0.803997 13.231 0.727997 13.363 0.727997 13.506V29.658C0.727997 29.801 0.803997 29.933 0.927997 30.005L7.205 33.632C7.267 33.667 7.336 33.685 7.405 33.685C7.474 33.685 7.543 33.667 7.605 33.632L18.885 27.118L65.837 54.224V67.25C65.837 67.393 65.913 67.525 66.036 67.597L72.313 71.222C72.375 71.257 72.444 71.276 72.513 71.276C72.582 71.276 72.651 71.257 72.713 71.222L94.953 58.38C95.076 58.309 95.152 58.176 95.152 58.033V41.879C95.152 41.736 95.076 41.604 94.953 41.532L88.318 37.7ZM94.58 57.933L72.689 70.573V54.821L94.58 42.181V57.933ZM88.479 38.456L94.406 41.879L72.515 54.519L66.587 51.096L68.477 50.005L68.785 49.827C68.785 49.827 68.785 49.826 68.786 49.826L71.296 48.376L71.604 48.198C71.604 48.198 71.604 48.197 71.605 48.197L74.115 46.749L74.423 46.571C74.423 46.571 74.423 46.57 74.424 46.57L76.934 45.122L77.242 44.944C77.242 44.944 77.242 44.943 77.243 44.943L79.752 43.496L80.062 43.318C80.063 43.317 80.063 43.317 80.063 43.316L82.571 41.869L82.881 41.691C82.882 41.69 82.882 41.69 82.882 41.689L85.393 40.24L85.7 40.064L88.209 38.613L88.479 38.456ZM65.878 50.687L8.112 17.336L10.274 16.089L10.496 16.216L68.04 49.439L65.878 50.687ZM23.368 0.866007L29.296 4.28901L7.405 16.927L1.477 13.506L23.368 0.866007ZM7.58 17.229L29.471 4.59101V4.60201L27.408 5.79301C27.401 5.79701 27.4 5.80701 27.394 5.81201C27.381 5.82201 27.373 5.83101 27.363 5.84301C27.358 5.84901 27.349 5.85001 27.344 5.85701C27.339 5.86401 27.344 5.87301 27.341 5.88001C27.335 5.89501 27.331 5.90701 27.329 5.92201C27.328 5.93001 27.32 5.93501 27.32 5.94301V5.99601L27.274 5.96901C27.267 5.96501 27.258 5.96901 27.25 5.96601C27.229 5.95801 27.21 5.95801 27.188 5.95801C27.164 5.95801 27.145 5.95801 27.123 5.96701C27.115 5.97001 27.107 5.96601 27.1 5.97001L24.588 7.41901C24.581 7.42301 24.58 7.43301 24.574 7.43801C24.561 7.44801 24.553 7.45701 24.543 7.46901C24.538 7.47501 24.529 7.47601 24.524 7.48301C24.519 7.49001 24.524 7.49901 24.521 7.50601C24.515 7.52101 24.512 7.53301 24.509 7.54901C24.508 7.55701 24.5 7.56201 24.5 7.57001V7.62201L24.456 7.59701C24.449 7.59301 24.44 7.59701 24.432 7.59401C24.411 7.58501 24.391 7.58501 24.368 7.58501C24.345 7.58501 24.326 7.58501 24.305 7.59401C24.297 7.59701 24.289 7.59301 24.282 7.59701L21.77 9.04601C21.763 9.05001 21.762 9.06001 21.756 9.06501C21.743 9.07501 21.735 9.08401 21.725 9.09601C21.72 9.10201 21.711 9.10301 21.706 9.11001C21.701 9.11701 21.706 9.12601 21.703 9.13301C21.697 9.14801 21.694 9.16001 21.691 9.17601C21.69 9.18401 21.682 9.18901 21.682 9.19701V9.25101L21.637 9.22501C21.63 9.22101 21.621 9.22501 21.613 9.22201C21.592 9.21301 21.573 9.21401 21.55 9.21401C21.527 9.21401 21.508 9.21401 21.487 9.22201C21.479 9.22501 21.47 9.22101 21.463 9.22501L18.951 10.672C18.943 10.676 18.943 10.686 18.936 10.691C18.923 10.701 18.915 10.71 18.905 10.722C18.9 10.728 18.891 10.729 18.886 10.736C18.881 10.743 18.886 10.751 18.883 10.759C18.877 10.774 18.874 10.786 18.871 10.802C18.87 10.81 18.862 10.815 18.862 10.823V10.875L18.818 10.85C18.811 10.846 18.802 10.85 18.794 10.847C18.773 10.838 18.754 10.838 18.731 10.838C18.708 10.838 18.688 10.838 18.666 10.847C18.659 10.85 18.65 10.846 18.643 10.85L16.131 12.299C16.124 12.303 16.123 12.313 16.117 12.318C16.104 12.328 16.096 12.337 16.086 12.349C16.081 12.355 16.072 12.356 16.067 12.363C16.062 12.37 16.067 12.379 16.064 12.386C16.058 12.401 16.055 12.413 16.052 12.429C16.051 12.437 16.043 12.442 16.043 12.45V12.504L15.999 12.479C15.992 12.475 15.983 12.479 15.975 12.476C15.954 12.467 15.935 12.467 15.912 12.467C15.889 12.467 15.869 12.467 15.847 12.476C15.839 12.479 15.831 12.475 15.824 12.479L13.312 13.928C13.305 13.932 13.304 13.942 13.298 13.947C13.285 13.957 13.277 13.966 13.267 13.978C13.262 13.984 13.253 13.985 13.248 13.992C13.243 13.999 13.248 14.008 13.245 14.015C13.239 14.03 13.236 14.042 13.233 14.058C13.232 14.066 13.224 14.071 13.224 14.079V14.13L13.178 14.103C13.17 14.099 13.161 14.103 13.154 14.1C13.133 14.091 13.114 14.092 13.091 14.092C13.069 14.092 13.049 14.092 13.028 14.101C13.02 14.104 13.011 14.1 13.004 14.104L10.494 15.555C10.487 15.559 10.486 15.569 10.48 15.574C10.467 15.584 10.459 15.593 10.449 15.605C10.444 15.611 10.435 15.612 10.43 15.619C10.425 15.626 10.43 15.635 10.427 15.642C10.421 15.657 10.417 15.669 10.415 15.684C10.414 15.692 10.406 15.697 10.406 15.705V15.758L10.36 15.731C10.353 15.727 10.344 15.731 10.336 15.728C10.315 15.719 10.295 15.72 10.272 15.72C10.249 15.72 10.23 15.72 10.209 15.729C10.201 15.732 10.192 15.728 10.185 15.732L7.673 17.181C7.666 17.185 7.665 17.195 7.659 17.2C7.646 17.21 7.638 17.219 7.628 17.231C7.623 17.237 7.614 17.238 7.609 17.245C7.604 17.252 7.609 17.261 7.606 17.268C7.6 17.283 7.597 17.295 7.594 17.311C7.593 17.319 7.585 17.324 7.585 17.332V20.232C7.585 20.24 7.593 20.246 7.594 20.253C7.597 20.276 7.607 20.293 7.619 20.313C7.631 20.333 7.64 20.35 7.659 20.364C7.665 20.369 7.666 20.379 7.673 20.383L18.534 26.652L7.58 32.982V17.229ZM85.783 39.609V39.596L87.943 38.349V38.36L85.783 39.609ZM13.092 14.46L13.314 14.587L70.858 47.81L68.696 49.058L10.932 15.708L13.092 14.46ZM15.913 12.835L16.132 12.962L73.677 46.184L71.515 47.432L13.751 14.082L15.913 12.835ZM18.731 11.206L18.95 11.333L76.495 44.557L74.333 45.804L16.569 12.453L18.731 11.206ZM21.55 9.58101L21.769 9.70601L79.313 42.93L77.151 44.177L19.388 10.827L21.55 9.58101ZM24.368 7.95201L24.587 8.07901L82.133 41.301L79.972 42.55L22.206 9.19901L24.368 7.95201ZM27.186 6.32501L27.408 6.45201L84.952 39.673L82.79 40.922L25.024 7.57201L27.186 6.32501ZM68.871 49.361L71.033 48.113V48.124L68.871 49.373V49.361ZM71.689 47.734L73.851 46.486V46.496L71.689 47.744V47.734ZM74.508 46.107L76.67 44.859V44.869L74.508 46.117V46.107ZM77.326 44.48L79.488 43.232V43.242L77.326 44.49V44.48ZM80.146 42.853L82.306 41.604V41.617L80.146 42.864V42.853ZM82.965 41.226L85.127 39.977V39.988L82.965 41.237V41.226ZM30.005 4.69601L87.768 38.047L85.608 39.294L27.845 5.94501L29.733 4.85401L30.005 4.69601ZM1.303 29.558V13.809L7.23 17.23V32.982L1.303 29.558ZM18.973 26.505L7.938 20.136V17.639L65.704 50.99V53.485L18.973 26.505ZM66.053 50.99L68.215 49.742V49.752L66.151 50.944C66.143 50.948 66.143 50.958 66.136 50.963C66.123 50.973 66.115 50.982 66.105 50.994C66.1 51 66.09 51.001 66.086 51.008C66.082 51.016 66.086 51.024 66.083 51.031C66.076 51.047 66.073 51.058 66.071 51.074C66.07 51.082 66.062 51.088 66.062 51.095V53.48L66.052 53.486L66.053 50.99ZM66.412 67.149V53.582V51.398L72.34 54.821V70.572L66.412 67.149ZM88.293 38.158V38.148L88.302 38.152L88.293 38.158ZM29.82 4.39901V4.39001L29.828 4.39501L29.82 4.39901ZM66.062 53.883V53.894L66.053 53.889L66.062 53.883Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    name: "Урны",
    description: "Урны для парков и улиц",
    href: "/catalog?category=urn",
    icon: (
      <svg
        width="100"
        height="125"
        viewBox="0 0 100 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M41 88.7H15.1V31.6H11.1V92.7H45V31.6H41V88.7Z" fill="black" />
        <path
          d="M55.5 29.6V92.7H89.4V29.6H55.5ZM85.3 33.6V50.9H59.5V33.6H85.3ZM70.4 54.9V88.7H66.8V54.9H70.4ZM74.4 54.9H78.1V88.7H74.4V54.9ZM59.5 54.9H62.9V88.7H59.5V54.9ZM82.1 88.7V54.9H85.3V88.7H82.1Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    name: "Детские спортивыне комплексы",
    description: "Уличные спортивные комлпексы для детей",
    href: "/catalog?category=dsk",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 24 30"
      >
        <g>
          <g>
            <path d="M23.5,7.996H7v-1h0.5c0.196,0,0.374-0.115,0.456-0.293c0.081-0.179,0.05-0.389-0.079-0.536l-3.5-4    c-0.19-0.218-0.563-0.218-0.753,0l-3.5,4c-0.129,0.148-0.161,0.357-0.079,0.536C0.126,6.881,0.304,6.996,0.5,6.996H1v14.5    c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-0.5h4v0.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-12.5h3v5.092    c-0.581,0.207-1,0.757-1,1.408c0,0.827,0.673,1.5,1.5,1.5c0.827,0,1.5-0.673,1.5-1.5c0-0.651-0.419-1.201-1-1.408V8.996h4v4.092    c-0.581,0.207-1,0.757-1,1.408c0,0.827,0.673,1.5,1.5,1.5c0.827,0,1.5-0.673,1.5-1.5c0-0.651-0.419-1.201-1-1.408V8.996h3v12.5    c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-12.5h2v1.105c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v1.46    c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v1.46c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v1.46    c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v0.855c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-0.855    c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645v-1.46c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645v-1.46    c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645v-1.46c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645V8.996h0.5    c0.276,0,0.5-0.224,0.5-0.5S23.776,7.996,23.5,7.996z M6,19.996H2v-2h4V19.996z M6,16.996H2v-2h4V16.996z M6,13.996H2v-2h4V13.996    z M6,10.996H2v-4h4V10.996z M1.602,5.996L4,3.255l2.398,2.741H1.602z M10.5,15.996c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5    s0.5,0.224,0.5,0.5S10.776,15.996,10.5,15.996z M15.5,14.996c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5    S15.776,14.996,15.5,14.996z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: " Деские игровые комплексы",
    description: "Игровые комплексы для детей всех возрастов",
    href: "/catalog?category=dik",

    icon: (
      <svg
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M116.87,166.956c-27.618,0-50.087,22.469-50.087,50.087v33.391c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696v-33.391C166.957,189.425,144.489,166.956,116.87,166.956z M133.565,233.739h-33.391v-16.696
			c0-9.206,7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696V233.739z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M495.304,411.826c-45.342,0-78.471-25.254-93.246-59.028c-29.793-68.11-94.898-113.518-168.319-118.58V116.869
			c0-4.251-1.676-8.584-4.877-11.792c-0.006-0.006-0.01-0.011-0.016-0.017L128.676,4.89c-6.519-6.52-17.091-6.52-23.611,0
			L4.893,105.061c-0.006,0.006-0.01,0.011-0.016,0.017C1.709,108.254,0,112.526,0,116.869v378.435C0,504.525,7.475,512,16.696,512
			h66.783c9.22,0,16.696-7.475,16.696-16.696v-27.826h33.391v27.826c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696V334.881c11.836,1.661,23.125,5.444,33.391,11.035v149.388c0,9.22,7.475,16.696,16.696,16.696
			c9.22,0,16.696-7.475,16.696-16.696V375.642c12.018,17.035,12.348,29.813,33.391,57.608v62.054c0,9.22,7.475,16.696,16.696,16.696
			s16.696-7.475,16.696-16.696v-27.572c35.069,28.381,78.047,44.268,128,44.268c9.22,0,16.696-7.475,16.696-16.696v-66.783
			C512,419.301,504.525,411.826,495.304,411.826z M116.87,40.308l59.867,59.866H57.002L116.87,40.308z M133.565,434.087h-33.391
			v-33.391h33.391V434.087z M133.565,367.304h-33.391v-33.391h33.391V367.304z M200.348,478.608h-33.391V317.217
			c0-9.22-7.475-16.696-16.696-16.696H83.478c-9.22,0-16.696,7.475-16.696,16.696v161.391H33.391V133.565h166.957
			C200.348,143.582,200.348,461.749,200.348,478.608z M478.609,478.041c-60.137-4.991-113.252-42.532-137.726-98.483
			c-19.168-43.809-60.389-73.45-107.144-78.324v-33.536c60.137,4.991,113.252,42.532,137.726,98.483
			c19.157,43.784,60.297,73.44,107.144,78.324V478.041z"
            />
          </g>
        </g>
      </svg>
    ),
  },
];
const category = [
  {
    name: "Благоустройство территории",
    description: "Урны. Лавчоки. Перголы. Столы.",
    href: "/category/blag",
    icon: (
      <svg
        width="100"
        height="125"
        viewBox="0 0 100 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M41 88.7H15.1V31.6H11.1V92.7H45V31.6H41V88.7Z" fill="black" />
        <path
          d="M55.5 29.6V92.7H89.4V29.6H55.5ZM85.3 33.6V50.9H59.5V33.6H85.3ZM70.4 54.9V88.7H66.8V54.9H70.4ZM74.4 54.9H78.1V88.7H74.4V54.9ZM59.5 54.9H62.9V88.7H59.5V54.9ZM82.1 88.7V54.9H85.3V88.7H82.1Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    name: "Детское игровое оборудование",
    description: "Игрвые комплексы. Качели. Горки. Карусли.",
    href: "/category/igra",
    icon: (
      <svg
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M116.87,166.956c-27.618,0-50.087,22.469-50.087,50.087v33.391c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696v-33.391C166.957,189.425,144.489,166.956,116.87,166.956z M133.565,233.739h-33.391v-16.696
			c0-9.206,7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696V233.739z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M495.304,411.826c-45.342,0-78.471-25.254-93.246-59.028c-29.793-68.11-94.898-113.518-168.319-118.58V116.869
			c0-4.251-1.676-8.584-4.877-11.792c-0.006-0.006-0.01-0.011-0.016-0.017L128.676,4.89c-6.519-6.52-17.091-6.52-23.611,0
			L4.893,105.061c-0.006,0.006-0.01,0.011-0.016,0.017C1.709,108.254,0,112.526,0,116.869v378.435C0,504.525,7.475,512,16.696,512
			h66.783c9.22,0,16.696-7.475,16.696-16.696v-27.826h33.391v27.826c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696V334.881c11.836,1.661,23.125,5.444,33.391,11.035v149.388c0,9.22,7.475,16.696,16.696,16.696
			c9.22,0,16.696-7.475,16.696-16.696V375.642c12.018,17.035,12.348,29.813,33.391,57.608v62.054c0,9.22,7.475,16.696,16.696,16.696
			s16.696-7.475,16.696-16.696v-27.572c35.069,28.381,78.047,44.268,128,44.268c9.22,0,16.696-7.475,16.696-16.696v-66.783
			C512,419.301,504.525,411.826,495.304,411.826z M116.87,40.308l59.867,59.866H57.002L116.87,40.308z M133.565,434.087h-33.391
			v-33.391h33.391V434.087z M133.565,367.304h-33.391v-33.391h33.391V367.304z M200.348,478.608h-33.391V317.217
			c0-9.22-7.475-16.696-16.696-16.696H83.478c-9.22,0-16.696,7.475-16.696,16.696v161.391H33.391V133.565h166.957
			C200.348,143.582,200.348,461.749,200.348,478.608z M478.609,478.041c-60.137-4.991-113.252-42.532-137.726-98.483
			c-19.168-43.809-60.389-73.45-107.144-78.324v-33.536c60.137,4.991,113.252,42.532,137.726,98.483
			c19.157,43.784,60.297,73.44,107.144,78.324V478.041z"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Зоны workout. Уличные тренажеры",
    description:
      "Тренажеры. Спортивные комплексы. Спортивные снаряды. Workout.",
    href: "/category/sport",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 24 30"
      >
        <g>
          <g>
            <path d="M23.5,7.996H7v-1h0.5c0.196,0,0.374-0.115,0.456-0.293c0.081-0.179,0.05-0.389-0.079-0.536l-3.5-4    c-0.19-0.218-0.563-0.218-0.753,0l-3.5,4c-0.129,0.148-0.161,0.357-0.079,0.536C0.126,6.881,0.304,6.996,0.5,6.996H1v14.5    c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-0.5h4v0.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-12.5h3v5.092    c-0.581,0.207-1,0.757-1,1.408c0,0.827,0.673,1.5,1.5,1.5c0.827,0,1.5-0.673,1.5-1.5c0-0.651-0.419-1.201-1-1.408V8.996h4v4.092    c-0.581,0.207-1,0.757-1,1.408c0,0.827,0.673,1.5,1.5,1.5c0.827,0,1.5-0.673,1.5-1.5c0-0.651-0.419-1.201-1-1.408V8.996h3v12.5    c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-12.5h2v1.105c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v1.46    c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v1.46c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v1.46    c-0.3,0.125-0.5,0.353-0.5,0.645s0.2,0.52,0.5,0.645v0.855c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-0.855    c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645v-1.46c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645v-1.46    c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645v-1.46c0.3-0.125,0.5-0.353,0.5-0.645s-0.2-0.52-0.5-0.645V8.996h0.5    c0.276,0,0.5-0.224,0.5-0.5S23.776,7.996,23.5,7.996z M6,19.996H2v-2h4V19.996z M6,16.996H2v-2h4V16.996z M6,13.996H2v-2h4V13.996    z M6,10.996H2v-4h4V10.996z M1.602,5.996L4,3.255l2.398,2.741H1.602z M10.5,15.996c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5    s0.5,0.224,0.5,0.5S10.776,15.996,10.5,15.996z M15.5,14.996c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5    S15.776,14.996,15.5,14.996z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Резиновое покрытие",
    description: "Наливное покрытие. Резиновая плитка",
    href: "/category/pokritie",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        enable-background="new 0 0 100 100"
      >
        <path d="M94.2,41.8l-44-25.4c-0.4-0.2-0.9-0.2-1.2,0L5.1,41.8c-0.4,0.2-0.6,0.6-0.6,1.1v12.8c0,0.4,0.2,0.8,0.6,1.1L49,82.1  c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2l43.9-25.4c0.4-0.2,0.6-0.6,0.6-1.1V42.8C94.8,42.4,94.6,42,94.2,41.8z M48.4,78.9  L6.9,55V45l41.5,24V78.9z M49.7,66.8l-41.5-24l41.5-24l41.5,24L49.7,66.8z M92.4,55L50.9,79V69l41.5-24V55z" />
      </svg>
    ),
  },
  {
    name: "Заборы и ограждения",
    description:
      "Газонное, мобильное. Ограждение спортивных площадок. Ограждение детских площадок",
    href: "/category/zabor",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 598 491.25"
        x="0px"
        y="0px"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <g>
          <path
            class="fil0"
            d="M0 0l598 0 0 25 -23 0 -1 342 16 0 0 26 -57 0 0 -26 16 0 0 -92 -495 0 0 92 15 0 0 26 -57 0 0 -26 17 0 1 -342 -30 0 0 -25zm528 25l0 225 21 0 0 -225 -21 0zm-11 225l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -25 0 0 225 25 0zm-36 0l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -24 0 0 225 24 0zm-36 0l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -25 0 0 225 25 0zm-36 0l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -25 0 0 225 25 0zm-36 0l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -25 0 0 225 25 0zm-36 0l0 -225 -25 0 0 225 25 0zm-37 0l0 -225 -23 0 -1 225 24 0z"
          />
        </g>
      </svg>
    ),
  },
];
const callsToAction = [
  { name: "Наши работы", href: "/gallery", icon: PlayCircleIcon },
  { name: "Связаться с нами", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem("cart-fazel", json);
    }
    isMounted.current = true;
  }, [cartItems]);
  return (
    <header className=" z-40 fixed w-[100%] flex-[0_0_auto] shadow-sm bg-white">
      <nav className=" flex con items-center py-3  " aria-label="Global">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Логотип</span>
            <svg
              width="59"
              height="22"
              viewBox="0 0 59 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.36 22L4.89 0.579999H13.62L13.14 2.8H6.9L5.28 10.6H11.1L10.62 12.82H4.8L2.85 22H0.36ZM9.47719 22L19.2572 0.519999H22.2572L23.0972 22H20.5772L20.3372 15.25H15.2072L12.2072 22H9.47719ZM16.1372 12.97H20.3372L20.2772 6.37C20.2572 5.81 20.2372 5.24 20.2172 4.66C20.2172 4.08 20.2272 3.56 20.2472 3.1H20.1572C19.9972 3.56 19.8072 4.07 19.5872 4.63C19.3872 5.19 19.1472 5.78 18.8672 6.4L16.1372 12.97ZM23.9423 22L24.3623 20.08L35.0723 2.8H28.2023L28.6823 0.579999H38.4023L38.0123 2.53L27.2423 19.78H34.5623L34.1123 22H23.9423ZM37.069 22L41.599 0.579999H50.299L49.849 2.8H43.609L42.169 9.7H47.959L47.509 11.92H41.689L40.009 19.78H46.249L45.769 22H37.069ZM49.3737 22L53.9037 0.579999H56.3937L52.3137 19.78H58.4637L58.0137 22H49.3737Z"
                fill="#09090B"
              />
            </svg>
          </Link>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="  focus-visible: outline-none flex items-center gap-x-1 text-sm font-semibold leading-6 text-neutral-950">
              <Link href="/catalog">Продукция</Link>
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  ">
                        {item.icon}
                        {/* <ite
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        /> */}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-neutral-950"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-neutral-950 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="  focus-visible: outline-none flex items-center gap-x-1 text-sm font-semibold leading-6 text-neutral-950">
              <Link href="/category">Каталог</Link>
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {category.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  ">
                        {item.icon}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-neutral-950"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-neutral-950 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/projects"
            className="text-sm font-semibold leading-6 text-neutral-950"
          >
            Проекты
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-neutral-950"
          >
            О компании
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-neutral-950"
          >
            Контакты
          </Link>
        </Popover.Group>

        <div className=" justify-end  flex-initial flex items-center lg:flex-1  ">
          {/* <SearchField /> */}
          <Link
            href="/cart"
            className="text-sm font-semibold leading-6 text-neutral-950"
          >
            <div className="relative">
              <ShoppingBagIcon
                className="h-5 mx-5 w-5 flex-none  text-gray-800"
                aria-hidden="true"
              />
              {totalCount > 0 && (
                <div className=" w-4 h-4 text-xs rounded-full flex justify-center items-center absolute top-0 right-3 bg-red-700 text-neutral-100 font-light">
                  {totalCount}
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className=" justify-center flex-initial  flex lg:hidden lg:flex-1 ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* <Dialog.Panel ></Dialog.Panel> */}
      <Dialog
        as="div"
        className="l lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Логотип</span>
              <svg
                width="59"
                height="22"
                viewBox="0 0 59 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.36 22L4.89 0.579999H13.62L13.14 2.8H6.9L5.28 10.6H11.1L10.62 12.82H4.8L2.85 22H0.36ZM9.47719 22L19.2572 0.519999H22.2572L23.0972 22H20.5772L20.3372 15.25H15.2072L12.2072 22H9.47719ZM16.1372 12.97H20.3372L20.2772 6.37C20.2572 5.81 20.2372 5.24 20.2172 4.66C20.2172 4.08 20.2272 3.56 20.2472 3.1H20.1572C19.9972 3.56 19.8072 4.07 19.5872 4.63C19.3872 5.19 19.1472 5.78 18.8672 6.4L16.1372 12.97ZM23.9423 22L24.3623 20.08L35.0723 2.8H28.2023L28.6823 0.579999H38.4023L38.0123 2.53L27.2423 19.78H34.5623L34.1123 22H23.9423ZM37.069 22L41.599 0.579999H50.299L49.849 2.8H43.609L42.169 9.7H47.959L47.509 11.92H41.689L40.009 19.78H46.249L45.769 22H37.069ZM49.3737 22L53.9037 0.579999H56.3937L52.3137 19.78H58.4637L58.0137 22H49.3737Z"
                  fill="#09090B"
                />
              </svg>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Закрыть меню</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-950 hover:bg-gray-50">
                        Продукция
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-neutral-950 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-neutral-950 hover:bg-gray-50">
                        Каталог
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...category, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-neutral-950 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/project"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-neutral-950 hover:bg-gray-50"
                >
                  Проекты
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-950 hover:bg-gray-50"
                >
                  О компании
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-950 hover:bg-gray-50"
                >
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
