import { classNames } from "@/lib/utils";

export default function SVGClubsCommunities({
    width,
    height,
    className,
    ...props
}: {
    width?: number | string;
    height?: number | string;
    className?: string;
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 115 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={classNames("icon ease-in-out duration-700", className || "")}>
            <g clipPath="url(#clip0_272_2059)">
                <path d="M85.5547 30.9032C82.9085 24.3243 76.1328 20.5228 69.1159 21.6583C62.2228 22.7731 57.0081 28.6003 56.5782 35.6746C56.2815 40.5622 57.6665 44.8288 61.3503 48.1621C63.3476 49.9696 65.7162 51.0399 68.448 51.1195C72.2777 51.231 75.687 48.6016 76.6262 44.8495C76.7547 44.3335 76.8546 43.8111 76.9689 43.2919C76.9689 43.2919 76.972 43.2919 76.9736 43.2919C77.0942 42.7425 77.2132 42.1915 77.3338 41.642C77.5574 40.6244 78.2079 39.9969 79.1724 39.7134C80.1402 39.4283 80.9445 39.7691 81.6077 40.4985C81.6711 40.5686 81.7441 40.6291 81.798 40.704C82.4643 41.6102 83.3575 41.9351 84.4268 41.6532C85.5341 41.3601 86.1211 40.575 86.3369 39.4586C86.9032 36.5266 86.6668 33.668 85.5547 30.9016V30.9032ZM61.0869 29.9986C61.3566 28.6656 62.7114 27.7626 64.0314 28.035C65.3402 28.3057 66.227 29.6897 65.943 31.0195C65.6733 32.2808 64.3185 33.1918 63.0509 32.964C61.7707 32.7331 60.8236 31.303 61.0853 29.9986H61.0869ZM64.1662 39.1687C63.8949 40.5049 62.5433 41.3936 61.2154 41.1101C59.8923 40.8282 59.0198 39.457 59.3148 38.1272C59.6052 36.8245 60.9076 35.9676 62.2054 36.224C63.5443 36.49 64.4359 37.831 64.1646 39.1687H64.1662ZM69.6284 45.4849C69.3729 46.8131 68.0118 47.7321 66.6934 47.4661C65.3878 47.2033 64.466 45.8034 64.7326 44.4943C64.9927 43.2203 66.4555 42.2727 67.7262 42.5546C68.9747 42.8317 69.8727 44.2156 69.6284 45.4849ZM73.5437 27.5477C73.255 28.8536 71.8399 29.7566 70.5517 29.4588C69.2714 29.1625 68.3687 27.6974 68.6797 26.4201C68.9843 25.1715 70.3819 24.2844 71.632 24.5504C72.9393 24.8275 73.834 26.2322 73.5437 27.5461V27.5477Z" fill="white" />
                <path d="M71.9731 53.1243C66.5173 56.8223 61.4835 61.049 56.7083 65.5911C56.5084 65.7822 56.3339 65.9988 56.2117 66.3762C56.5084 66.2838 56.8178 66.2201 57.0986 66.0943C63.0113 63.422 68.7621 60.4407 74.1767 56.8494C75.2142 56.1614 76.0471 55.1644 76.9387 54.3411C76.1836 53.3584 75.5998 52.5972 74.9112 51.7021C73.9657 52.1513 72.8822 52.5096 71.9731 53.1259V53.1243Z" fill="white" />
                <path d="M80.5511 46.9614C79.2502 47.2131 78.0382 47.6892 77.1339 48.7308C76.3438 49.6402 76.117 50.6499 76.6151 51.4605C77.2782 52.5418 77.889 53.6248 79.5278 53.448C83.2719 53.0467 85.4517 50.8712 85.6849 47.0602C85.7372 46.197 85.6722 45.3258 85.6563 44.1489C84.1825 45.904 82.4564 46.5919 80.5495 46.9614H80.5511Z" fill="#D1DDFF" />
                <path d="M56.621 35.1461C57.2715 28.3123 62.3957 22.7462 69.1175 21.6585C76.136 20.523 82.9117 24.3245 85.5563 30.9034C86.4701 33.1745 86.7922 35.506 86.5653 37.8901C86.5161 38.4109 86.44 38.9348 86.3385 39.4604C86.1227 40.5752 85.5357 41.3619 84.4284 41.655C83.3591 41.9369 82.4643 41.612 81.7996 40.7058C81.7441 40.6309 81.6711 40.5688 81.6092 40.5004C80.9477 39.7709 80.1418 39.4317 79.174 39.7152C78.2095 39.9987 77.559 40.6278 77.3353 41.6438C77.2148 42.1933 77.0958 42.7427 76.9752 43.2937C76.9752 43.2937 76.972 43.2937 76.9705 43.2937C76.8578 43.8129 76.7579 44.3353 76.6278 44.8513C75.6886 48.6034 72.2793 51.2328 68.4496 51.1213C65.7178 51.0417 63.3492 49.9714 61.3518 48.1639C57.6681 44.829 56.2831 40.5641 56.5798 35.6764C56.5909 35.4996 56.6036 35.3229 56.621 35.1477M64.2059 38.9157C64.3248 37.6671 63.4634 36.4759 62.2085 36.2274C60.9108 35.9695 59.6083 36.8263 59.318 38.1306C59.2958 38.2293 59.2799 38.3281 59.2704 38.4284C59.153 39.6595 59.9922 40.8523 61.217 41.1135C62.5448 41.397 63.8949 40.5067 64.1678 39.1721C64.1852 39.0877 64.1979 39.0017 64.2059 38.9173M65.9875 30.749C66.1048 29.5099 65.2529 28.2916 64.0329 28.04C62.7146 27.7661 61.3582 28.6706 61.0885 30.0036C61.0726 30.0801 61.0615 30.1565 61.0552 30.233C60.9378 31.4704 61.8484 32.7508 63.0541 32.969C64.3217 33.1968 65.6765 32.2874 65.9462 31.0245C65.9652 30.9337 65.9795 30.8413 65.989 30.7506M69.6617 45.2797C69.7759 44.0709 68.9097 42.8207 67.7294 42.558C66.4586 42.2761 64.9959 43.2237 64.7357 44.4977C64.7199 44.5774 64.7072 44.657 64.6993 44.7382C64.5819 45.9741 65.4703 47.2226 66.695 47.4695C68.0133 47.7355 69.3745 46.8165 69.6299 45.4883C69.6426 45.4183 69.6537 45.3482 69.6601 45.2781M73.5897 27.2708C73.7071 26.0429 72.8473 24.8134 71.6336 24.5554C70.3835 24.2894 68.9858 25.1749 68.6812 26.4251C68.6559 26.527 68.64 26.6289 68.6305 26.7325C68.5163 27.9285 69.3761 29.1914 70.5548 29.4637C71.8446 29.7616 73.2597 28.8586 73.5469 27.5526C73.5675 27.4587 73.5818 27.3647 73.5913 27.2708M56.2133 66.3814C56.3355 66.004 56.51 65.7874 56.7099 65.5963C61.4851 61.0558 66.5205 56.8291 71.9747 53.1295C72.8838 52.5132 73.9673 52.1565 74.9128 51.7058C75.5998 52.6008 76.1852 53.3605 76.9403 54.3447C76.0487 55.168 75.2158 56.165 74.1783 56.853C68.7637 60.4443 63.0129 63.4256 57.1002 66.098C56.8193 66.2254 56.51 66.2875 56.2133 66.3798M76.3644 50.3473C76.4152 49.8138 76.6833 49.258 77.137 48.734C78.0413 47.6925 79.2534 47.2179 80.5543 46.9646C82.4612 46.5952 84.1872 45.9072 85.661 44.1521C85.6769 45.3291 85.7419 46.2002 85.6896 47.0634C85.6817 47.1812 85.6737 47.2975 85.6626 47.4122C85.32 51.0082 83.1608 53.0627 79.5326 53.4512C77.8938 53.6264 77.283 52.5435 76.6198 51.4637C76.4088 51.1197 76.3279 50.7391 76.3644 50.3457M53.2736 34.826C53.253 35.0394 53.2371 35.256 53.2229 35.471C52.8453 41.6868 54.8236 46.8022 59.0991 50.6738C60.8918 52.2966 62.8701 53.4098 65.0102 54.0023C61.5121 56.689 58.0044 59.7101 54.3952 63.1421C53.74 63.7648 53.2879 64.4815 53.0119 65.3351C52.9341 65.5724 52.8849 65.8161 52.8627 66.0581C52.7691 67.0424 53.1102 68.0329 53.8194 68.7528C54.703 69.651 56.0134 69.9791 57.2144 69.6048C57.2731 69.5857 57.3334 69.5698 57.3936 69.5539C57.6729 69.4774 58.0552 69.3707 58.4835 69.178C65.2751 66.1091 71.0165 63.0004 76.0344 59.6719C77.0307 59.011 77.8081 58.2306 78.4934 57.5426C78.7425 57.2926 78.9789 57.0553 79.1994 56.8514C79.4263 56.8514 79.6563 56.8387 79.8895 56.8132C82.4723 56.5361 84.587 55.6092 86.1766 54.058C87.8107 52.4622 88.7657 50.3346 89.0132 47.7355C89.0275 47.5826 89.0402 47.4281 89.0497 47.272C89.0941 46.5442 89.0735 45.8642 89.0529 45.1443C89.0434 44.8163 89.0322 44.4754 89.0275 44.1091C89.0211 43.5645 88.8831 43.0437 88.642 42.5835C89.1227 41.8763 89.4654 41.0434 89.6462 40.1086C89.7684 39.4779 89.8604 38.8409 89.9191 38.215C90.1999 35.2687 89.7826 32.383 88.6801 29.6421C87.1158 25.7498 84.2539 22.4835 80.6225 20.4434C77.0006 18.408 72.7267 17.6563 68.5845 18.3268C60.3682 19.655 54.0716 26.441 53.2736 34.8276V34.826Z" fill="#525252" />
                <path d="M39.8269 62.2817C39.765 66.5626 39.0638 70.6492 37.736 74.4746H49.9675C48.6396 70.6476 47.9384 66.5626 47.8766 62.2817H39.8269Z" fill="white" />
                <path d="M49.6922 49.9527C51.0209 46.7323 49.4976 43.0404 46.2896 41.7064C43.0816 40.3725 39.4039 41.9018 38.0751 45.1221C36.7463 48.3425 38.2697 52.0345 41.4777 53.3684C44.6856 54.7023 48.3634 53.1731 49.6922 49.9527Z" fill="white" />
                <path d="M38.0009 58.9849H49.7026C50.207 58.9849 50.6338 58.5565 50.6338 58.0501C50.6338 57.5436 50.207 57.1152 49.7026 57.1152H38.0009C37.4964 57.1152 37.0696 57.5436 37.0696 58.0501C37.0696 58.5565 37.4964 58.9849 38.0009 58.9849Z" fill="#D1DDFF" />
                <path d="M52.8374 77.7729H34.8661C34.03 77.7729 33.351 78.4562 33.351 79.2939C33.351 80.1316 34.0316 80.8148 34.8661 80.8148H52.8374C53.6735 80.8148 54.3525 80.1316 54.3525 79.2939C54.3525 78.4562 53.6719 77.7729 52.8374 77.7729Z" fill="#D1DDFF" />
                <path d="M53.4053 74.6227C51.8712 70.6954 51.0812 66.4384 51.0479 61.9409C52.6518 61.3803 53.8067 59.8483 53.8067 58.0486C53.8067 56.1391 52.5058 54.529 50.7464 54.064C52.3551 52.3615 53.3435 50.0634 53.3435 47.5376C53.3435 42.3012 49.0997 38.041 43.8835 38.041C38.6672 38.041 34.4234 42.3012 34.4234 47.5376C34.4234 50.0571 35.407 52.3488 37.0078 54.0513C35.2214 54.4972 33.8952 56.12 33.8952 58.0502C33.8952 59.8483 35.0501 61.3819 36.654 61.9425C36.6223 66.44 35.8322 70.6969 34.2965 74.6243C31.9787 74.9061 30.1749 76.8921 30.1749 79.2953C30.1749 81.8912 32.2786 84.0014 34.8629 84.0014H52.8342C55.4201 84.0014 57.5222 81.8896 57.5222 79.2953C57.5222 76.8937 55.72 74.9061 53.4006 74.6243L53.4053 74.6227ZM43.885 41.2262C47.3514 41.2262 50.1722 44.0578 50.1722 47.5376C50.1722 51.0174 47.3514 53.849 43.885 53.849C40.4186 53.849 37.5979 51.0174 37.5979 47.5376C37.5979 44.0578 40.4186 41.2262 43.885 41.2262ZM38.0009 57.1138H49.7026C50.2071 57.1138 50.6338 57.5422 50.6338 58.0486C50.6338 58.5551 50.2071 58.9835 49.7026 58.9835H38.0009C37.4964 58.9835 37.0696 58.5551 37.0696 58.0486C37.0696 57.5422 37.4964 57.1138 38.0009 57.1138ZM49.9675 74.4746H37.736C39.0638 70.6476 39.765 66.5626 39.8269 62.2817H47.8766C47.9384 66.5626 48.6396 70.6492 49.9675 74.4746ZM52.8374 80.8146H34.8661C34.03 80.8146 33.351 80.1314 33.351 79.2937C33.351 78.456 34.0316 77.7728 34.8661 77.7728H52.8374C53.6735 77.7728 54.3525 78.456 54.3525 79.2937C54.3525 80.1314 53.6719 80.8146 52.8374 80.8146Z" fill="#525252" />
                <path d="M20.5404 53.8413C16.8741 53.8413 13.9407 56.786 13.9407 60.4665C13.9407 64.1469 16.8741 67.0916 20.5404 67.0916C24.2067 67.0916 27.048 64.0545 27.14 60.4665C27.14 56.786 24.2067 53.8413 20.5404 53.8413Z" fill="#D1DDFF" />
                <path d="M30.9888 28.8487L41.4371 31.5179V24.2493L30.9888 21.4878V28.8487Z" fill="#D1DDFF" />
                <path d="M43.8216 20.752L29.4309 17.0715C28.8804 16.8868 28.2394 17.0715 27.781 17.4394C27.3225 17.8073 27.048 18.3599 27.048 19.0033V52.2772C25.2157 50.8056 22.9232 49.9775 20.4484 49.9775C14.6737 49.9759 10 54.6692 10 60.4647C10 66.2601 14.6737 70.9534 20.4484 70.9534C26.2231 70.9534 30.8967 66.2617 30.8967 60.4647V32.897L42.8126 35.9341C43.3631 36.1188 44.004 35.9341 44.4625 35.5662C44.921 35.1983 45.1954 34.6457 45.1954 34.0023V22.6838C45.3779 21.7633 44.7369 21.0275 43.82 20.752H43.8216ZM20.5404 67.0898C16.8741 67.0898 13.9407 64.1451 13.9407 60.4647C13.9407 56.7842 16.8741 53.8395 20.5404 53.8395C24.2067 53.8395 27.14 56.7842 27.14 60.4647C27.048 64.0527 24.1147 67.0898 20.5404 67.0898ZM41.4371 31.5179L30.9888 28.8503V21.4878L41.4371 24.2477V31.5163V31.5179Z" fill="#525252" />
            </g>
            <defs>
                <clipPath id="clip0_272_2059">
                    <rect width="80" height="67" fill="white" transform="translate(10 17)" />
                </clipPath>
            </defs>
        </svg>
    );
}