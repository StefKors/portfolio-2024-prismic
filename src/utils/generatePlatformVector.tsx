export interface PlatformSupport {
  macos: boolean;
  ios: boolean;
  ipados: boolean;
  tvos: boolean;
  watchos: boolean;
  visionos: boolean;
}

export const generatePlatformVector = (support: PlatformSupport) => {
  return `<svg width="118" height="18" viewBox="0 0 118 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
        .device.active {
            fill: #424245;
        }

        .device.inactive {
            fill: #D2D2D7;
        }

        @media (prefers-color-scheme: dark) {
            .device.active {
                fill: #D2D2D7;
            }

            .device.inactive {
                fill: #424245;
            }
        }
    </style>

    <g clip-path="url(#clip0_137_960)">
        <path
            d="M2.02637 14.7168H7.38867V16.3188H7.33887C6.97363 16.3188 6.6665 16.6177 6.6665 16.9912C6.6665 17.3647 6.97363 17.6636 7.33887 17.6636H12.6846C13.0498 17.6636 13.3486 17.3647 13.3486 16.9912C13.3486 16.6177 13.0498 16.3188 12.6846 16.3188H12.6348V14.7168H17.9888C19.1841 14.7168 19.9062 13.9946 19.9062 12.7993V2.84668C19.9062 1.65137 19.1841 0.9375 17.9888 0.9375H2.02637C0.839355 0.9375 0.117188 1.65137 0.117188 2.84668V12.7993C0.117188 13.9946 0.839355 14.7168 2.02637 14.7168ZM1.81055 11.0562C1.56152 11.0562 1.45361 10.9648 1.45361 10.6992V2.87158C1.45361 2.49805 1.68604 2.27393 2.05127 2.27393H17.9722C18.3374 2.27393 18.5698 2.49805 18.5698 2.87158V10.6992C18.5698 10.9648 18.4536 11.0562 18.2046 11.0562H1.81055Z"
            class="device ${support.macos ? 'active' : 'inactive'}" />
    </g>
    <g clip-path="url(#clip1_137_960)">
        <path
            d="M24.4375 17.7876H30.5884C31.9414 17.7876 32.8462 16.9243 32.8462 15.6294V2.37305C32.8462 1.07812 31.9414 0.214844 30.5884 0.214844H24.4375C23.0845 0.214844 22.1797 1.07812 22.1797 2.37305V15.6294C22.1797 16.9243 23.0845 17.7876 24.4375 17.7876ZM24.6118 16.4512C23.9062 16.4512 23.5161 16.0776 23.5161 15.4136V2.58887C23.5161 1.9248 23.9062 1.55127 24.6118 1.55127H25.6743C25.8071 1.55127 25.8735 1.61768 25.8735 1.74219V1.93311C25.8735 2.28174 26.106 2.51416 26.4463 2.51416H28.5879C28.9365 2.51416 29.1606 2.28174 29.1606 1.93311V1.74219C29.1606 1.61768 29.2271 1.55127 29.3599 1.55127H30.4224C31.1196 1.55127 31.5098 1.9248 31.5098 2.58887V15.4136C31.5098 16.0776 31.1196 16.4512 30.4224 16.4512H24.6118ZM25.7573 15.8452H29.2852C29.5093 15.8452 29.667 15.6875 29.667 15.4551C29.667 15.2227 29.5093 15.0732 29.2852 15.0732H25.7573C25.5332 15.0732 25.3672 15.2227 25.3672 15.4551C25.3672 15.6875 25.5332 15.8452 25.7573 15.8452Z"
            class="device ${support.ios ? 'active' : 'inactive'}" />
    </g>
    <g clip-path="url(#clip2_137_960)">
        <path
            d="M37.7236 16.6606H52.084C53.8271 16.6606 54.6904 15.7974 54.6904 14.0874V3.95215C54.6904 2.24219 53.8271 1.37891 52.084 1.37891H37.7236C35.9888 1.37891 35.1172 2.23389 35.1172 3.95215V14.0874C35.1172 15.8057 35.9888 16.6606 37.7236 16.6606ZM37.7402 15.3242C36.9102 15.3242 36.4536 14.8843 36.4536 14.021V4.01855C36.4536 3.15527 36.9102 2.71533 37.7402 2.71533H52.0674C52.8892 2.71533 53.354 3.15527 53.354 4.01855V14.021C53.354 14.8843 52.8892 15.3242 52.0674 15.3242H37.7402ZM41.6997 14.6851H48.1162C48.3403 14.6851 48.498 14.5356 48.498 14.3032C48.498 14.0708 48.3403 13.9131 48.1162 13.9131H41.6997C41.4756 13.9131 41.3096 14.0708 41.3096 14.3032C41.3096 14.5356 41.4756 14.6851 41.6997 14.6851Z"
            class="device ${support.ipados ? 'active' : 'inactive'}" />
    </g>
    <g clip-path="url(#clip3_137_960)">
        <path
            d="M59.2505 14.2749H75.7358C77.1387 14.2749 77.8691 13.5527 77.8691 12.1416V2.62891C77.8691 1.22607 77.1387 0.503906 75.7358 0.503906H59.2505C57.8477 0.503906 57.1172 1.22607 57.1172 2.62891V12.1416C57.1172 13.5527 57.8477 14.2749 59.2505 14.2749ZM59.2754 12.9385C58.7275 12.9385 58.4536 12.6646 58.4536 12.125V2.65381C58.4536 2.10596 58.7275 1.84033 59.2754 1.84033H75.7109C76.2588 1.84033 76.5327 2.10596 76.5327 2.65381V12.125C76.5327 12.6646 76.2588 12.9385 75.7109 12.9385H59.2754ZM63.3179 17.0889H71.6685C72.0337 17.0889 72.3408 16.79 72.3408 16.4165C72.3408 16.043 72.0337 15.7441 71.6685 15.7441H63.3179C62.9526 15.7441 62.6455 16.043 62.6455 16.4165C62.6455 16.79 62.9526 17.0889 63.3179 17.0889Z"
            class="device ${support.tvos ? 'active' : 'inactive'}" />
    </g>
    <g clip-path="url(#clip4_137_960)">
        <path
            d="M80.8711 12.3687C80.8711 13.6553 81.3774 14.6016 82.3154 15.1162C82.772 15.3569 83.0376 15.6641 83.2036 16.2202L83.4692 17.1084C83.627 17.6396 84.0005 17.897 84.5566 17.897H88.3916C88.9644 17.897 89.313 17.6479 89.4707 17.1084L89.7446 16.2202C89.9106 15.6641 90.1763 15.3569 90.6328 15.1162C91.5708 14.6016 92.0771 13.6553 92.0771 12.3687V8.42578H92.1934C92.625 8.42578 92.9072 8.13525 92.9072 7.66211V6.5415C92.9072 6.06836 92.625 5.77783 92.1934 5.77783H92.0771V5.65332C92.0771 4.3667 91.5708 3.42871 90.6328 2.90576C90.1763 2.66504 89.9106 2.35791 89.7446 1.81006L89.4707 0.913574C89.3296 0.390625 88.9561 0.125 88.3916 0.125H84.5566C84.0005 0.125 83.627 0.382324 83.4692 0.913574L83.2036 1.81006C83.0459 2.34961 82.7803 2.67334 82.3154 2.90576C81.3857 3.40381 80.8711 4.3501 80.8711 5.65332V12.3687ZM82.083 12.1943V5.83594C82.083 4.59912 82.8052 3.85205 84.0171 3.85205H88.9312C90.1431 3.85205 90.8652 4.59912 90.8652 5.83594V12.1943C90.8652 13.4229 90.1431 14.1699 88.9312 14.1699H84.0171C82.8052 14.1699 82.083 13.4229 82.083 12.1943Z"
            class="device ${support.watchos ? 'active' : 'inactive'}" />
    </g>
    <g clip-path="url(#clip5_137_960)">
        <path
            d="M117.148 8.95703C117.148 12.3945 114.977 15.0117 112.094 15.0117C109.125 15.0117 107.57 12.4961 106.078 12.4961C104.578 12.4961 103.023 15.0117 100.055 15.0117C97.1719 15.0117 95 12.3945 95 8.95703C95 3.33203 99.9609 2.69922 106.078 2.69922C112.188 2.69922 117.148 3.32422 117.148 8.95703ZM96.2578 8.95703C96.2578 11.9258 97.75 13.7539 100.055 13.7539C102.789 13.7539 103.82 11.2383 106.078 11.2383C108.328 11.2383 109.359 13.7539 112.094 13.7539C114.398 13.7539 115.891 11.9258 115.891 8.95703C115.891 4.41797 112.055 3.95703 106.078 3.95703C100.094 3.95703 96.2578 4.42578 96.2578 8.95703Z"
            class="device ${support.visionos ? 'active' : 'inactive'}" />
    </g>
    <defs>
        <clipPath id="clip0_137_960">
            <rect width="20" height="18" fill="white" />
        </clipPath>
        <clipPath id="clip1_137_960">
            <rect width="11" height="18" fill="white" transform="translate(22)" />
        </clipPath>
        <clipPath id="clip2_137_960">
            <rect width="20" height="16" fill="white" transform="translate(35 1)" />
        </clipPath>
        <clipPath id="clip3_137_960">
            <rect width="21" height="17" fill="white" transform="translate(57 0.5)" />
        </clipPath>
        <clipPath id="clip4_137_960">
            <rect width="13" height="18" fill="white" transform="translate(80)" />
        </clipPath>
        <clipPath id="clip5_137_960">
            <rect width="22.5547" height="12.6016" fill="white" transform="translate(95 2.69922)" />
        </clipPath>
    </defs>
</svg>`;
};