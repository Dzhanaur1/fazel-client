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
    href: "/catalog?category=banches",
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
    href: "/catalog?category=urns",
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
    name: "Столы уличные",
    description: "Практичные уличные столы  по доступным ценам.",
    href: "/catalog?category=tables",
    icon: (
      <svg
        width="99"
        height="42"
        viewBox="0 0 99 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M93.1 16H76.2C73.1 16 70.7 18.5 70.7 21.5C70.7 24.5 73.2 27 76.2 27H82.7V34C82.7 36.2 80.9 37.9 78.8 37.9H62.7C60.5 37.9 58.8 36.1 58.8 34V11H76.3C79.4 11 81.8 8.5 81.8 5.5C81.8 2.5 79.2 0 76.2 0H22.3C19.2 0 16.8 2.5 16.8 5.5C16.8 8.5 19.3 11 22.3 11H39.8V34C39.8 36.2 38 37.9 35.9 37.9H19.9C17.7 37.9 16 36.1 16 34V27H22.5C25.6 27 28 24.5 28 21.5C28 18.5 25.5 16 22.5 16H5.5C2.4 16 0 18.5 0 21.5C0 24.5 2.5 27 5.5 27H11.9V34C11.9 38.4 15.5 42 19.9 42H35.9C40.3 42 43.9 38.4 43.9 34V32H54.9V34C54.9 38.4 58.5 42 62.9 42H78.9C83.3 42 86.9 38.4 86.9 34V27H93.4C96.5 27 98.9 24.5 98.9 21.5C98.9 18.5 96.1 16 93.1 16ZM3.8 21.4C3.8 20.6 4.5 19.9 5.3 19.9H22.3C23.1 19.9 23.8 20.6 23.8 21.4C23.8 22.2 23.1 22.9 22.3 22.9H5.4C4.5 22.9 3.8 22.3 3.8 21.4ZM20.8 5.5C20.8 4.7 21.5 4 22.3 4H76.1C76.9 4 77.6 4.7 77.6 5.5C77.6 6.3 76.9 7 76.1 7H22.3C21.5 7 20.8 6.3 20.8 5.5ZM43.7 27.9V11H54.7V28C54.7 27.9 43.7 27.9 43.7 27.9ZM93.1 22.9H76.2C75.4 22.9 74.7 22.2 74.7 21.4C74.7 20.6 75.4 19.9 76.2 19.9H93.2C94 19.9 94.7 20.6 94.7 21.4C94.7 22.3 94 22.9 93.1 22.9Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    name: "Беседки",
    description:
      "Уютные беседки для приятных встреч и отдыха на свежем воздухе",
    href: "/catalog/gazebos",
    icon: (
      <svg
        width="90"
        height="88"
        viewBox="0 0 90 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.2054 24.3764C89.2054 24.1664 89.0418 23.999 88.8361 23.9826L61.3568 9.18054H67.1253C67.3037 9.18054 67.4605 9.06238 67.5097 8.89081C67.5589 8.7193 67.4886 8.53589 67.3372 8.44135L63.7905 6.22406C61.1302 4.56085 58.2749 3.28149 55.3072 2.37793C55.2339 2.29382 55.1294 2.23804 55.0091 2.23804C54.9801 2.23804 54.9546 2.24866 54.9274 2.25452C51.7104 1.31445 48.3622 0.825745 44.9721 0.825745C38.3582 0.825745 31.8908 2.66754 26.2693 6.1521L22.5773 8.44061C22.4254 8.53473 22.3543 8.7182 22.4034 8.89008C22.4523 9.06195 22.6093 9.18054 22.7881 9.18054H28.7605L1.00601 24.0209C0.841644 24.1089 0.771088 24.2942 0.813263 24.4672V27.8622C0.805817 27.8928 0.794586 27.9219 0.794586 27.9548V83.1774C0.794586 83.215 0.806305 83.2488 0.815948 83.2833V86.7743C0.815948 86.9952 0.995087 87.1743 1.21597 87.1743H88.8055C89.0263 87.1743 89.2054 86.9952 89.2054 86.7743V83.1774V27.9548V24.3764ZM80.805 82.7774V62.5743H85.0137V82.7774H80.805ZM75.6224 82.7774V62.5743H80.005V82.7774H75.6224ZM70.4051 82.7774V62.5743H74.8224V82.7774H70.4051ZM65.4137 82.7774V80.6011V62.5743H69.605V82.7774H65.4137ZM25.2137 82.7774V80.6011C25.2137 79.8174 25.8512 79.1799 26.6349 79.1799H30.0111H60.0172H63.2447C64.0124 79.1799 64.6137 79.8041 64.6137 80.6011V82.7774H25.2137ZM20.2137 82.7774V62.5743H24.4137V80.6011V82.7774H20.2137ZM15.0013 82.7774V62.5743H19.4137V82.7774H15.0013ZM10.0137 82.7774V62.5743H14.2012V82.7774H10.0137ZM5.02005 82.7774V62.5743H9.21371V82.7774H5.02005ZM60.4173 61.7743V59.9868H85.0137V61.7743H60.4173ZM64.6137 78.8791C64.2419 78.5706 63.7713 78.3799 63.2447 78.3799H60.4173V76.5475V62.5743H64.6137V78.8791ZM26.6349 78.3799C26.0918 78.3799 25.6001 78.5836 25.2137 78.9085V62.5743H29.6128V76.5312C29.6127 76.5368 29.6111 76.542 29.6111 76.5475V78.3799H26.6349ZM5.02005 61.7743V59.9868H29.6089C29.6103 59.9868 29.6114 59.986 29.6128 59.986V61.7743H5.02005ZM8.32162 28.3547L5.02005 31.6563V28.3547H8.32162ZM24.6555 28.3547L29.6128 33.312V36.3046L21.6628 28.3547H24.6555ZM37.3147 28.3547L33.6128 32.0566V28.3547H37.3147ZM51.3812 28.3547L56.2137 33.1872V36.1799L48.3885 28.3547H51.3812ZM63.9743 28.3547L60.4173 31.9119V28.3547H63.9743ZM68.0983 28.3547L60.4173 36.0357V33.0431L65.1055 28.3547H68.0983ZM76.1842 28.3547L85.0137 37.1842V59.1868H60.4173V37.1669L69.2295 28.3547H76.1842ZM80.308 28.3547L85.0137 33.0603V36.053L77.3155 28.3547H80.308ZM59.6172 32.876C59.6172 32.8772 59.6172 32.8785 59.6172 32.8798V74.7002C59.1468 74.2518 58.5088 73.9727 57.8042 73.9727H57.0136V37.3793C57.0742 37.2635 57.0742 37.1292 57.0136 37.0134V28.3547H59.6172V32.876ZM56.2137 32.056L52.5124 28.3547H56.2137V32.056ZM47.2573 28.3547L56.2137 37.3112V73.9727H33.6128V37.3037C33.6205 37.2972 33.63 37.2947 33.6372 37.2875L42.5699 28.3547H47.2573ZM33.6128 36.1807V33.1879L38.446 28.3547H41.4386L33.6128 36.1807ZM32.8128 32.8776C32.7219 33.0123 32.7219 33.1832 32.8128 33.3178V73.9727H32.1859C31.4977 73.9727 30.8751 74.2479 30.4128 74.6892V28.3547H32.8128V32.8776ZM29.6128 32.1807L25.7868 28.3547H29.6128V32.1807ZM20.5365 28.3547C20.5405 28.3591 20.5418 28.3649 20.5461 28.3692L29.6128 37.4359V59.1876C29.6114 59.1876 29.6103 59.1868 29.6089 59.1868H5.02005V36.9116L13.5298 28.4018C13.5437 28.3879 13.5497 28.37 13.5611 28.3547H20.5365ZM5.02005 35.7803V32.7876L9.45291 28.3547H12.4456L5.02005 35.7803ZM30.4111 76.614C30.4112 76.6111 30.4128 76.6087 30.4128 76.6058V76.5312C30.4217 75.5602 31.2129 74.7727 32.1859 74.7727H57.8042C58.787 74.7727 59.6172 75.5855 59.6172 76.5475V78.3799H30.4111V76.614ZM85.0137 31.929L81.4393 28.3547H85.0137V31.929ZM88.4054 27.5547H65.1816C65.0633 27.4907 64.9247 27.4907 64.8062 27.5547H60.0172H56.6136H33.2129H30.0127H24.9521C24.8384 27.4968 24.707 27.4968 24.5933 27.5547H4.62009H1.61325V24.7764H88.4054V27.5547ZM1.59457 28.3547H4.22006V36.7446C4.22006 36.7457 4.22006 36.7467 4.22006 36.7478V82.7774H1.59457V28.3547ZM85.8138 28.3549H88.4054V82.7774H85.8138V28.3549ZM65.7308 8.38055H55.409V3.25177C58.189 4.12921 60.8667 5.33954 63.3665 6.9024L65.7308 8.38055ZM48.8091 8.38055V1.85864C50.7751 2.07709 52.7166 2.44464 54.609 2.99176V8.38055H48.8091ZM48.0091 1.77441V8.38055H42.0137V1.76642C42.9956 1.6825 43.9811 1.62573 44.9721 1.62573C45.9898 1.62573 47.0014 1.68604 48.0091 1.77441ZM35.4137 8.38055V2.96899C37.3067 2.42657 39.2484 2.06409 41.2137 1.85016V8.38055H35.4137ZM26.6908 6.83197C29.1812 5.28827 31.8472 4.09296 34.6137 3.22705V8.38055H24.1927L26.6908 6.83197ZM59.67 9.18054L68.9406 14.1743H63.7275C63.5066 14.1743 63.3275 14.3534 63.3275 14.5743C63.3275 14.7952 63.5066 14.9743 63.7275 14.9743H70.2786C70.3166 14.9743 70.3509 14.9626 70.3857 14.9527L73.0348 16.3796H68.43C68.209 16.3796 68.0299 16.5588 68.0299 16.7797C68.0299 17.0005 68.209 17.1796 68.43 17.1796H74.3867C74.4211 17.1796 74.4518 17.1682 74.4836 17.16L77.119 18.5797H71.9073C71.6864 18.5797 71.5073 18.7587 71.5073 18.9797C71.5073 19.2006 71.6864 19.3796 71.9073 19.3796H78.4659C78.5016 19.3796 78.5335 19.3681 78.5664 19.3593L87.1379 23.9764H2.7858L30.457 9.18054H59.67ZM88.4054 86.3743H1.616V83.5774H4.62009H24.8138H65.0137H85.4137H88.4054V86.3743Z"
          fill="black"
        />
        <path
          d="M69.2246 19.3796H70.4246C70.6455 19.3796 70.8246 19.2006 70.8246 18.9797C70.8246 18.7587 70.6455 18.5797 70.4246 18.5797H69.2246C69.0037 18.5797 68.8246 18.7587 68.8246 18.9797C68.8246 19.2006 69.0037 19.3796 69.2246 19.3796Z"
          fill="black"
        />
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
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [cartItems]);
  return (
    <header className=" z-40 fixed w-[100%] flex-[0_0_auto] shadow-sm bg-white">
      <nav className=" flex con items-center py-3  " aria-label="Global">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
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
              <Link href="/catalog">Каталог</Link>
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
          <SearchField />
          <Link
            href="/cart"
            className="text-sm font-semibold leading-6 text-neutral-950"
          >
            <div className="relative">
              <ShoppingBagIcon
                className="h-5 mx-5 w-5 flex-none  text-gray-800"
                aria-hidden="true"
              />
              <div className=" w-4 h-4 text-xs rounded-full flex justify-center items-center absolute top-0 right-3 bg-red-700 text-neutral-100 font-light">
                {totalCount}
              </div>
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
              <span className="sr-only">Logo</span>
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
              <span className="sr-only">Close menu</span>
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
                <Link
                  href="/project"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-neutral-950 hover:bg-gray-50"
                >
                  Проекты
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-950 hover:bg-gray-50"
                >
                  О компании
                </Link>
                <Link
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
