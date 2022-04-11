/*
                               +%@@@#+-           
                              #@@@@@@@@@%*=:      
                             .@@@@..-+#@@@@@@%+-. 
                             *@@@+      :=*@@@@@@%
                            .@@@@           .-+##-
           .:-==--:.        *@@@+                 
     .-+#%@@%#++**#%@@@%#*+=@@@@                  
 .=#@@#+-=++++=-.      .:-=@@@@@%#+=:             
 %@@@%#+=-:.   :-=++++=-.  #@@#..-#@@@#           
 @@  .-=+*#%@@%#*+=--:::-=*##+*#@@#*@@@:          
.@%           .:-=+*#%@@@@@%#+@#=- -@%@:          
-@*           -*       .@*%#: ##-*.@=*@:          
=@+         :#%         @- -%*#%:*%# *@-          
*@-       .*@@.         @=   -%@.+@  *@-          
#@:      +@@@:          @=    :+++:  *@:          
%@.    =@@@@#=========: @=           *@:          
@@   -%@@@@@@@@@@@@@@#  @=           *@:          
@@ .#@@@@@@@@@@@@@@@+   @+           #@:          
@@  ..::--==+%@@@@@=    @+           #@:          
@@          .@@@@@:     @+           %@.          
@@          %@@@#.      @+           %@.          
@@         +@@@*        @*           @@           
@@        :@@@=         @*           @@           
%@.       %@@-         :@*           @@           
#@:      +@%.          =@*           @@           
+@=     :@*            %@#          .@%           
-@*     %=            :@@#          :@#           
.@%    --             %@@#          -@#           
 %@-                 #@@@#          =@+           
 :+#%@%*+=-:.      =@@@@@#        -*@%:           
      .-=+*%@@%##%@@@@@@@%:-==*#@@#+:             

*/


export default function generateSVG(params) {
  return `
    <svg width="290" height="290" viewBox="0 0 290 290" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${generateSVGDefs(params)}
      ${generateSVGBorderText(
        params.quoteToken,
        params.baseToken,
        params.quoteTokenSymbol,
        params.baseTokenSymbol
      )}
      ${generateSVGCardMantle(
        params.quoteTokenSymbol,
        params.baseTokenSymbol,
        params.feeTier
      )}
      ${generateSVGCurve(
        params.tickLower,
        params.tickUpper,
        params.tickSpacing,
        params.overRange
      )}
      ${generateSVGPositionDataAndLocationCurve(
        params.tokenId.toString(),
        params.tickLower,
        params.tickUpper
      )}
      ${generateSVGRareSparkle(params.isRare)}
    </svg>
  `;
};

function btoa(string) {
  return Buffer.from(string).toString("base64");
};

function generateSVGDefs(params) {
  return `
    <defs>
      <filter id="f1">
        <feImage result="p0" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <rect width='290px' height='290px' fill='#${params.color0}'/>
          </svg>
          `
        )}" />
        <feImage result="p1" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x1}' cy='${params.y1}' r='120px' fill='#${params.color1}'/>
          </svg>
          `
        )}" />
        <feImage result="p2" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x2}' cy='${params.y2}' r='120px' fill='#${params.color2}'/>
          </svg>
          `
        )}" />
        <feImage result="p3" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x3}' cy='${params.y3}' r='100px' fill='#${params.color3}'/>
          </svg>
          `
        )}" />
        <feBlend mode="overlay" in="p0" in2="p1" />
        <feBlend mode="exclusion" in2="p2" />
        <feBlend mode="overlay" in2="p3" result="blendOut" />
        <feGaussianBlur in="blendOut" stdDeviation="42" />
      </filter> 
      <clipPath id="corners">
        <rect width="290" height="290" rx="42" ry="42" />
      </clipPath>',
      <path id="text-path-a" d="M40 12 H250 A28 28 0 0 1 278 40 V250 A28 28 0 0 1 250 278 H40 A28 28 0 0 1 12 250 V40 A28 28 0 0 1 40 12 z" />
      <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463" />
      <filter id="top-region-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="24" />
      </filter>
      <linearGradient id="grad-up" x1="1" x2="0" y1="1" y2="0">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset=".9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="grad-down" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset="0.9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-up" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-up)" />
      </mask>
      <mask id="fade-down" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-down)" />
      </mask>
      <mask id="none" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="white" />
      </mask>
      <linearGradient id="grad-symbol">
        <stop offset="0.7" stop-color="white" stop-opacity="1" />
        <stop offset=".95" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
        <rect width="290px" height="200px" fill="url(#grad-symbol)" />
      </mask>
    </defs>
    <g clip-path="url(#corners)">
      <rect fill="${
        params.color0
      }" x="0px" y="0px" width="290px" height="290px" />
      <rect style="filter: url(#f1)" x="0px" y="0px" width="290px" height="290px" />
      <g style="filter:url(#top-region-blur); transform:scale(1.5); transform-origin:center top;">
      <rect fill="none" x="0px" y="0px" width="290px" height="290px" />
      <ellipse cx="50%" cy="0px" rx="180px" ry="120px" fill="#000" opacity="0.85" /></g>
      <rect x="0" y="0" width="290" height="290" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)" />
    </g>
  `;
}

function generateSVGBorderText(
  quoteToken,
  baseToken,
  quoteTokenSymbol,
  baseTokenSymbol
) {
  return `
  <text text-rendering="optimizeSpeed">
      <textPath startOffset="-100%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          Juicebox Project description placeholder. (section 1)
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="0%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          Juicebox Project description placeholder. (section 2)
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="50%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          Juicebox Project description placeholder. (section 3)
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="-50%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          Juicebox Project description placeholder. (section 4)
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
  </text>
	`;
}

function generateSVGCardMantle(quoteTokenSymbol, baseTokenSymbol, feeTier) {  
  return `
  <g mask="url(#fade-symbol)">
        <rect fill="none" x="0px" y="0px" width="290px" height="200px"></rect>
        <text y="54px" x="32px" fill="white" font-family="'DM Mono', 'Courier New', monospace" font-weight="200"
            font-size="24px">
            ${quoteTokenSymbol}
        </text>
        <text y="74px" x="32px" fill="white" font-family="'Courier New', monospace" font-weight="200" font-size="16px">
            ${baseTokenSymbol}
        </text>
    </g>
  <rect x="16" y="16" width="258" height="258" rx="26" ry="26" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)">
  </rect>
  `;
}

function getCurve(tickLower, tickUpper, tickSpacing) {
  const curve1 = "M1 1C41 41 105 105 145 145";
  const curve2 = "M1 1C33 49 97 113 145 145";
  const curve3 = "M1 1C33 57 89 113 145 145";
  const curve4 = "M1 1C25 65 81 121 145 145";
  const curve5 = "M1 1C17 73 73 129 145 145";
  const curve6 = "M1 1C9 81 65 137 145 145";
  const curve7 = "M1 1C1 89 57.5 145 145 145";
  const curve8 = "M1 1C1 97 49 145 145 145";
  const tickRange = (tickUpper - tickLower) / tickSpacing;

  if (tickRange <= 4) {
    return curve1;
  } else if (tickRange <= 8) {
    return curve2;
  } else if (tickRange <= 16) {
    return curve3;
  } else if (tickRange <= 32) {
    return curve4;
  } else if (tickRange <= 64) {
    return curve5;
  } else if (tickRange <= 128) {
    return curve6;
  } else if (tickRange <= 256) {
    return curve7;
  } else {
    return curve8;
  }
}

function generateSVGCurveCircle(overRange) {
  const curvex1 = "73";
  const curvey1 = "190";
  const curvex2 = "217";
  const curvey2 = "334";

  if (overRange == 1 || overRange == -1) {
    return `
      <circle 
        cx="${overRange == -1 ? curvex1 : curvex2}px" 
        cy="${overRange == -1 ? curvey1 : curvey2}px" 
        r="4px" 
        fill="white" 
      />
      <circle 
        cx="${overRange == -1 ? curvex1 : curvex2}px" 
        cy="${overRange == -1 ? curvey1 : curvey2}px'" 
        r="24px" 
        fill="none" 
        stroke="white" 
      />`;
  } else {
    return `
      <circle 
        cx="${curvex1}px" 
        cy="${curvey1}px"
        r="4px" 
        fill="white" 
      />
			<circle 
        cx="${curvex2}px"
        cy="${curvey2}px" 
        r="4px" 
        fill="white" 
      />
		`;
  }
}

function generateSVGCurve(tickLower, tickUpper, tickSpacing, overRange) {
  if (overRange === 1) {
    overRange = "#fade-up";
  } else if (overRange === -1) {
    overRange = "#fade-down";
  } else {
    overRange = "#none";
  }
  const curve = getCurve(tickLower, tickUpper, tickSpacing);

  return `
	
	`;
}

function tickToString(tick) {
  let sign = "";
  if (tick < 0) {
    tick = tick * -1;
    sign = "-";
  }
  return `${sign}${tick.toString()}`;
}

function rangeLocation(tickLower, tickUpper) {
  const midPoint = (tickLower + tickUpper) / 2;

  if (midPoint < -100_000) {
    return ["8", "7"];
  } else if (midPoint < -50_000) {
    return ["8", "10.5"];
  } else if (midPoint < -10_000) {
    return ["8", "14.25"];
  } else if (midPoint < -100) {
    return ["10", "18"];
  } else if (midPoint < 0) {
    return ["11", "21"];
  } else if (midPoint < 100) {
    return ["13", "23"];
  } else if (midPoint < 10_000) {
    return ["15", "25"];
  } else if (midPoint < 50_000) {
    return ["18", "26"];
  } else if (midPoint < 100_000) {
    return ["21", "27"];
  } else {
    return ["24", "27"];
  }
}

function s(x) {
  return x.charCodeAt(0);
}

function bytes(string) {
  return string.split("").map(s);
}

function generateSVGPositionDataAndLocationCurve(
  tokenId,
  tickLower,
  tickUpper
) {
  const tickLowerStr = tickToString(tickLower);
  const tickUpperStr = tickToString(tickUpper);
  const str1length = bytes(tokenId).length + 4;
  const str2length = bytes(tickLowerStr).length + 10;
  const str3length = bytes(tickUpperStr).length + 10;
  const [xCoord, yCoord] = rangeLocation(tickLower, tickUpper);

  return `

  <g style="transform:translate(29px, 204px)">
        <rect width="60.6666px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">ID: </tspan>
            ${tokenId}
        </text>
    </g>
    <g style="transform:translate(29px, 224px)">
        <rect width="98px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">Reserved: </tspan>
            50%
        </text>
    </g>
    <g style="transform:translate(29px, 244px)">
        <rect width="98px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">Minting: </tspan>
            disabled
        </text>
    </g>
  <g style="transform: scale(1.4077) scale(0.4) translate(52.5%, 55%)">
      <path
          d="M104.171 0.138916C111.43 4.38225 118.689 8.62649 125.947 12.8718C126.973 13.3378 128.108 13.5108 129.226 13.3718C137.526 13.3718 145.836 13.3718 154.312 13.3718C158.412 20.4598 162.495 27.4118 166.453 34.4358C167.425 36.1996 168.883 37.6477 170.653 38.6086C177.686 42.5716 184.662 46.636 191.792 50.738C191.792 58.71 191.892 66.56 191.738 74.405C191.681 76.9754 192.379 79.5059 193.745 81.6838C197.745 88.4248 201.613 95.2511 205.558 102.09C201.386 109.324 197.33 116.435 193.18 123.49C192.262 125.025 191.799 126.789 191.847 128.577C191.918 136.664 191.877 144.752 191.877 153.177C184.992 157.189 178.07 161.309 171.051 165.258C169.082 166.312 167.461 167.913 166.382 169.868C162.488 176.815 158.444 183.679 154.294 190.856C146.969 190.856 139.573 190.986 132.185 190.801C128.72 190.642 125.291 191.555 122.363 193.414C116.177 197.271 109.763 200.77 103.195 204.564C96.1749 200.532 89.0699 196.5 82.0229 192.364C80.3029 191.319 78.3213 190.784 76.309 190.822C68.224 190.905 60.138 190.855 51.774 190.855C47.757 183.915 43.669 176.965 39.713 169.942C38.6973 168.074 37.1671 166.536 35.304 165.512C28.36 161.612 21.479 157.597 14.304 153.472C14.304 145.461 14.2609 137.383 14.3319 129.306C14.3917 127.183 13.8387 125.088 12.739 123.271C8.60595 116.333 4.63894 109.294 0.491943 102.085C4.34494 95.4037 8.12896 88.66 12.107 82.033C13.5984 79.6661 14.3559 76.9107 14.2839 74.114C14.1279 66.486 14.231 58.8517 14.231 50.9617C21.256 46.8767 28.2949 42.7157 35.4099 38.6897C37.166 37.7064 38.605 36.2427 39.558 34.47C43.532 27.446 47.6239 20.4888 51.7379 13.3928C59.8429 13.3928 67.811 13.3471 75.778 13.4241C77.9065 13.488 80.0074 12.9287 81.8229 11.8157C88.3329 7.85867 94.914 4.01596 101.468 0.136963L104.171 0.138916ZM128.626 84.8088L128.698 84.7581C128.142 86.4381 129.516 87.1579 130.264 88.4089C131.322 86.2319 129.746 85.6268 128.626 84.8088ZM104.944 71.572L104.984 71.7327L104.859 71.6228C103.63 69.9358 102.459 69.982 100.922 72.012L104.944 71.572ZM117.317 100.494C117.458 100.364 117.598 100.234 117.336 100.477C117.55 100.197 117.436 100.352 117.312 100.507C117.528 96.3591 114.112 94.0719 112.512 90.8069C111.926 92.7841 111.839 94.8756 112.258 96.8948C113.874 98.4758 116.097 98.7709 117.317 100.494ZM122.192 79.2297L123.466 80.1917L122.566 78.8577C121.828 76.9282 120.775 75.1347 119.451 73.5491C116.977 73.2862 114.478 73.3636 112.025 73.7791C115.976 75.8981 119.086 77.5647 122.192 79.2297ZM100.916 200.995L101.016 201.259L100.834 201.053C99.2344 197.587 97.3702 194.25 95.2579 191.071H83.7709C89.4389 194.616 94.624 198.788 100.916 200.995ZM41.649 169.149L41.528 169.307L41.7069 169.031C40.9749 170.321 42.0899 171.131 42.5859 172.022C44.6379 175.728 46.7799 179.383 48.9059 183.048C49.7439 184.493 50.6239 185.913 51.8959 188.027V175.161C48.3749 173.079 45.023 171.093 41.649 169.149ZM119.696 172.558H86.357C89.757 178.458 92.924 183.94 96.0399 189.339H109.986C113.152 183.875 116.319 178.401 119.696 172.562V172.558ZM50.3959 151.622L33.713 122.736L23.8889 139.761C26.3009 143.9 28.598 147.843 30.801 151.622H50.3959ZM172.317 122.736L155.665 151.595H175.314L182.13 139.695C178.862 134.049 175.745 128.658 172.321 122.74L172.317 122.736ZM182.152 64.4358L175.327 52.7H155.71C161.346 62.442 166.727 71.744 172.339 81.446L182.152 64.4358ZM95.998 14.9109L86.39 31.634H119.676C116.309 25.795 113.157 20.3339 110.032 14.9109H95.998ZM50.313 52.7058H30.6649L23.9149 64.491L33.731 81.4407C39.354 71.6977 44.76 62.3318 50.317 52.7058H50.313ZM33.7199 119.806L43.981 102.084C40.557 96.2027 37.2809 90.5711 33.6989 84.4231L23.486 102.101C26.902 108.011 30.1939 113.702 33.7239 119.806H33.7199ZM172.313 84.3621L162.086 102.137L172.314 119.762L182.577 102.111L172.313 84.3621ZM122.439 170.749H142.918L152.956 153.311H132.492L122.439 170.749ZM142.893 33.4021H122.427C125.927 39.4721 129.196 45.1487 132.412 50.7317H152.886C149.386 44.6607 146.112 38.99 142.893 33.407V33.4021ZM73.6729 50.718L83.6649 33.2917H63.2209C59.9639 38.9487 56.6989 44.622 53.1909 50.718H73.6729ZM83.6429 170.78L73.6519 153.475H53.1859C56.7109 159.585 59.986 165.253 63.171 170.78H83.6429ZM121.165 34.1589L104.145 44.0378L108.16 50.927H130.831C127.534 45.214 124.472 39.9008 121.165 34.1638V34.1589ZM102.051 44.2498C96.162 40.8728 90.571 37.6669 84.783 34.3499L75.1329 51.0701H98.114L102.051 44.2498ZM72.7329 52.6208H53.416V72.0129H61.516L72.7329 52.6208ZM153.889 74.0208L149.802 81.1418L161.15 100.779C164.523 94.9481 167.679 89.4921 170.959 83.8201L153.889 74.0208ZM44.9009 103.391L35.094 120.349L52.1259 130.104L56.265 123.048C52.518 116.573 48.8799 110.282 44.9009 103.398V103.391ZM152.586 151.613V132.333C149.868 132.001 147.12 132.001 144.402 132.333L133.339 151.608L152.586 151.613ZM53.653 131.928V151.49H72.675L61.3749 131.928H53.653ZM153.653 130.156L170.853 120.168L161.142 103.426L149.664 123.26C151.01 125.577 152.233 127.692 153.657 130.156H153.653ZM35.1609 84.011C38.5009 89.735 41.606 95.0541 44.934 100.756L56.374 80.9109L52.4269 74.0291L35.1609 84.011ZM98.006 153.404H75.2859L84.895 170.019L101.869 160.149L98.006 153.404ZM133.292 52.5847L144.726 72.3611C147.449 72.1671 150.003 72.6707 152.487 72.0427V52.5847H133.292ZM104.016 159.922L121.266 169.849L130.821 153.235H107.903C106.62 155.449 105.394 157.555 104.02 159.922H104.016ZM32.3159 153.381C35.6249 163.313 42.162 169.673 52.098 172.893C51.949 166.293 52.398 159.918 51.719 153.381H32.3159ZM111.963 188.859C122.426 191.179 131.15 188.429 138.97 181.659L121.77 171.882L111.963 188.859ZM182.648 137.706C189.877 129.869 191.872 120.993 189.98 110.753C184.273 114.089 178.664 117.368 172.868 120.753L182.648 137.706ZM154.416 153.324V172.731C164.14 169.361 170.559 163.031 173.758 153.324H154.416ZM94.072 15.3079C83.792 13.2419 74.9669 15.582 67.1599 22.491C72.7289 25.651 78.2009 29.2086 84.3829 32.1086L94.072 15.3079ZM67.424 181.808C75.307 188.624 83.9929 191.1 94.1169 188.898C90.8669 183.283 87.689 177.798 84.348 172.019L67.424 181.808ZM23.296 66.3357C16.496 74.2407 13.996 83.0289 16.205 93.3499L33.1679 83.4299L23.296 66.3357ZM189.935 93.0579C191.978 82.7249 189.476 74.0578 182.723 66.3708L172.961 83.2708L189.935 93.0579ZM173.686 50.7488C170.442 40.8408 163.928 34.5267 154.354 31.3987V50.7488H173.686ZM16.244 111.209C14.092 121.409 16.5329 130.049 23.3359 137.797L33.0819 120.897L16.244 111.209ZM111.97 15.3088C115.214 20.9188 118.38 26.3921 121.713 32.1541L138.588 22.3469C130.855 15.4829 122.158 13.3491 111.966 15.3191L111.97 15.3088ZM51.4699 50.7429V31.3137C40.5389 36.2797 35.4009 41.5199 32.3189 50.7429H51.4699ZM53.317 29.9871V47.4768L62.5359 31.6477H79.028L79.1679 31.1179L65.21 23.0798L53.317 29.9871ZM143.576 31.7708L152.504 47.0198V29.8L140.537 22.9167L126.41 31.158L126.618 31.7708H143.576ZM53.602 174.394L65.5689 181.252L79.6209 173.014L79.377 172.287H62.403L54.1559 158.158L53.601 158.458L53.602 174.394ZM140.863 181.094C144.987 178.506 149.272 176.601 152.548 174.082V157.018C149.284 162.625 146.484 167.436 143.528 172.518H127.022L126.947 173.095L140.863 181.094ZM184.188 102.061L176.022 116.515L176.606 116.876L190.306 108.857V94.925L176.13 86.8088L175.721 87.2488L184.188 102.061ZM120.129 132.167L114.802 141.305L130.802 150.538V132.167H120.129ZM120.281 72.0891H130.986V53.7888L115.018 62.9397L120.281 72.0891ZM85.87 72.1208L91.2329 62.845L75.3749 53.7449V72.1257L85.87 72.1208ZM142.948 92.8889L137.568 102.18L142.906 111.48L159.028 102.228L142.948 92.8889ZM30.0819 87.6887L29.4959 87.281L15.788 95.2908V109.264L29.8879 117.346L30.3279 116.935C27.4889 111.948 24.651 106.961 21.86 102.056L30.0819 87.6887ZM63.0899 111.268L68.49 102.006C66.703 98.9061 64.9969 95.938 63.1299 92.697L47.0359 101.953L63.0899 111.268ZM75.144 150.355L91.059 141.217L85.6589 131.98C81.9919 131.902 78.6759 131.596 75.1469 132.057L75.144 150.355ZM112.821 141.813L102.907 136.087L93.071 141.811L98.6549 151.568C101.666 151.655 104.423 151.939 107.267 151.385L112.821 141.813ZM62.0909 130.189H73.391V118.949L63.644 113.294L57.963 123.055L62.0909 130.189ZM73.4799 85.0569V73.7288H62.193L58.088 80.988L63.7079 90.7009L73.4799 85.0569ZM132.599 85.1907L142.428 90.8621L148.089 81.116L143.989 73.9851H132.599V85.1907ZM103.142 68.0911L113.035 62.3337C111 58.8427 109.208 55.769 107.443 52.74H98.796L93.2469 62.3479L103.142 68.0911ZM110.385 97.7507L103.055 93.4758L95.6979 97.7258V106.452L103.086 110.664L110.386 106.373L110.385 97.7507ZM132.685 119.051V130.451H143.834L147.98 123.214L142.309 113.489L132.685 119.051ZM36.0389 122.571L35.6209 123.115L51.2859 150.201L51.861 149.971V131.691L36.0389 122.571ZM154.429 149.749L154.967 149.916C160.206 140.819 165.445 131.722 170.683 122.626L170.183 122.243L154.426 131.4L154.429 149.749ZM87.3499 33.3889L87.0359 33.9519L102.902 43.052L118.633 33.9338L118.423 33.3918L87.3499 33.3889ZM154.813 54.0388L154.205 54.178V72.4778L169.983 81.6101L170.483 81.176C165.261 72.1287 160.038 63.0828 154.813 54.0388ZM51.624 54.7107L50.976 54.4978L35.4139 81.449L35.9799 81.8728L51.624 72.7727V54.7107ZM103.161 161.137L86.7419 170.637H119.735L103.161 161.137ZM77.7209 88.825C74.1049 94.213 74.321 111.077 77.8419 114.92L85.314 102.046L77.7209 88.825ZM127.082 86.7058C124.541 81.3538 109.882 72.9848 104.506 73.8528L111.863 86.7058H127.082ZM104.162 130.678C110.332 131.125 125.268 122.241 126.672 117.578H111.755C109.295 121.824 106.84 126.058 104.162 130.678ZM79.339 117.595C81.016 122.671 96.7909 131.686 101.505 130.247L94.2419 117.595H79.339ZM94.351 86.55L101.71 73.7859C95.886 72.9759 80.8269 81.733 79.4229 86.55H94.351ZM128.326 89.0989C125.75 93.5279 123.254 97.8188 120.737 102.145L128.213 115.145C131.663 110.768 131.729 93.6439 128.326 89.0989ZM91.762 142.499L77.055 150.978L77.2379 151.5H96.913L91.762 142.499ZM63.1949 72.0818C67.1429 72.1488 70.315 72.4068 73.468 71.9558V54.2297L63.1949 72.0818ZM128.286 151.568L128.498 150.912L113.935 142.497C112.505 145.905 110.235 148.266 109.324 151.568H128.286ZM47.8059 104.079L47.2409 104.531L57.11 121.584C58.99 118.359 60.6009 115.598 62.3659 112.57L47.8059 104.079ZM142.955 72.199L132.805 54.6799V72.199H142.955ZM143.665 91.6257L158.349 100.12L158.749 99.5569L148.961 82.6287L143.665 91.6257ZM62.4649 91.405L57.1769 82.4451C53.7419 88.4121 50.605 93.8627 47.468 99.3137L47.968 99.7209L62.4649 91.405ZM143.623 112.782L148.875 121.764L158.624 104.833L158.124 104.442L143.623 112.782ZM109.159 52.7488L114.29 61.6799L128.797 53.3611L128.502 52.7488H109.159ZM63.1509 132.017C66.5509 137.926 69.697 143.395 73.231 149.539V132.017H63.1509ZM132.545 148.929L133.084 149.09L142.83 132.124C139.02 132.149 135.83 131.774 132.545 132.374V148.929ZM91.9779 61.6238L96.9779 52.9397H77.0209C82.4079 56.0637 87.0469 58.7579 91.9779 61.6199V61.6238ZM85.9539 103.824L79.124 115.739H92.847L85.9539 103.824ZM109.822 117.951H96.1219L102.977 129.796L109.822 117.951ZM113.204 115.77H126.886C124.513 111.67 122.375 107.977 120.029 103.926L113.204 115.77ZM103.086 74.3489L96.24 86.2229H109.871L103.086 74.3489ZM151.125 189.272L151.314 188.761L140.814 182.782L130.683 188.689L130.943 189.272H151.125ZM120.075 100.343L126.942 88.4958H113.241C115.593 92.5769 117.699 96.2249 120.079 100.349L120.075 100.343ZM86.019 100.275C88.432 96.0847 90.563 92.3831 92.877 88.3621H79.149L86.019 100.275ZM14.1329 82.6008L13.4999 82.4197L3.31595 100.149L3.82394 100.52L14.137 94.5129L14.1329 82.6008ZM95.3059 13.2336L101.273 2.83374L100.745 2.46899L83.2039 12.7078L83.495 13.2317L95.3059 13.2336ZM65.494 182.923L54.8759 189.123H76.2759L65.494 182.923ZM190.367 129.756L189.767 129.456L183.834 139.767C185.88 143.289 187.842 146.667 189.804 150.04L190.37 149.763L190.367 129.756ZM191.991 121.527L192.613 121.647L202.759 104.038L202.211 103.673L191.991 109.65V121.527ZM164.841 169.732L164.366 169.17L154.429 174.911V186.455L155.003 186.663L164.841 169.732ZM122.446 13.1707L122.613 12.6331L105.457 2.77271L104.998 3.25171C106.971 6.65171 108.943 10.0447 110.758 13.1707H122.446ZM183.828 64.4548L190.144 75.3391V53.5247C187.758 57.6647 185.873 60.9277 183.832 64.4597L183.828 64.4548ZM18.0599 153.323L17.9449 153.923L35.559 164.003L35.959 163.528L30.051 153.322L18.0599 153.323ZM154.721 16.969L154.102 17.1931V29.0369L164.393 34.9529L164.837 34.4778L154.721 16.969ZM4.19495 104.269L3.70996 104.836L13.6049 121.828L14.205 121.534V110.049L4.19495 104.269ZM104.814 201.223L105.389 201.657L122.689 191.539L122.371 191.039H110.686C108.675 194.537 106.746 197.884 104.818 201.232L104.814 201.223ZM187.777 50.781L187.893 50.137L170.569 40.219L170.169 40.801L175.969 50.781H187.777ZM170.205 163.358L170.761 163.797L187.861 153.797L187.567 153.281H175.998C174.061 156.66 172.131 160.022 170.209 163.367L170.205 163.358ZM54.102 15.0437L65.2299 21.4041L76.1119 15.0437H54.102ZM201.976 99.9568L202.365 99.4138L192.003 81.5369V94.2488L201.976 99.9568ZM51.5469 17.8127L50.9179 17.6741L41.1299 34.6379L41.602 35.0681L51.5469 29.3V17.8127ZM15.868 149.474L16.4309 149.759L22.2079 139.728L15.868 128.78V149.474ZM15.9 53.5208V74.3391L16.4349 74.4617L22.2 64.4241L15.9 53.5208ZM35.847 40.8489L35.3849 40.3411L18.3719 50.2649L18.654 50.7888H30.0919C32.0459 47.4108 33.947 44.1289 35.847 40.8489ZM109.039 13.2327C106.993 9.66867 105.151 6.45908 103.039 2.77808L97.011 13.2327H109.039ZM130.883 15.011L130.729 15.6311L140.571 21.2527L150.366 15.5417L150.101 15.011H130.883ZM3.61694 102.297L14.072 108.27V96.2971L3.61694 102.297ZM130.935 73.8079C127.767 73.7749 124.852 73.4009 121.735 74.0579C124.279 78.0929 125.435 82.9137 130.935 84.1277V73.8079ZM53.1859 28.3391L63.748 22.2478L53.1859 16.2229V28.3391ZM136.85 103.925C134.54 108.464 130.675 111.88 132.644 117.395L141.617 112.205L136.85 103.925ZM152.55 15.9617C148.823 18.1327 145.639 19.9867 141.96 22.1287L152.55 28.0769V15.9617ZM182.995 141.211C180.85 144.911 179.027 148.066 177.04 151.497H188.918C186.91 148.008 185.133 144.921 182.997 141.211H182.995ZM17.14 151.499H29.002C26.939 147.927 25.1139 144.77 23.0599 141.214L17.14 151.499ZM73.5009 117.341C74.9889 111.615 71.536 108.241 69.106 103.888L64.378 112.006L73.5009 117.341ZM192.023 107.92L202.345 101.849L192.023 95.969V107.92ZM69.2029 100.287C71.5499 95.7869 75.114 92.34 73.481 86.762L64.4309 91.97L69.2029 100.287ZM136.927 100.377L141.662 92.1267L132.48 86.8889C130.957 92.5289 134.604 95.8947 136.927 100.377ZM118.242 132.383C113.22 132.426 108.476 131.083 104.542 135.345L113.58 140.556C115.201 137.72 116.611 135.249 118.242 132.383ZM101.524 135.216C97.3 131.175 92.668 132.33 87.67 132.474C89.396 135.432 90.8349 137.9 92.3499 140.495C95.5059 138.679 98.396 137.015 101.524 135.216ZM121.424 130.561C124.941 130.376 127.8 130.928 130.824 130.266V120.101C125.359 121.368 124.267 126.18 121.427 130.561H121.424ZM113.733 63.6897L104.533 68.9377C108.769 73.1027 113.492 71.7298 118.48 71.9138L113.733 63.6897ZM75.265 84.0959C80.789 82.6779 81.884 77.8751 84.473 73.7351C81.036 73.6641 78.173 73.3627 75.265 73.8977V84.0959ZM64.0559 182.096L53.8199 176.211V188.011L64.0559 182.096ZM152.747 175.887L142.316 181.949L152.75 187.849L152.747 175.887ZM87.5859 72.0149C92.8019 71.6659 97.6079 73.1451 101.53 68.8401L92.524 63.6497L87.5859 72.0149ZM109.122 190.849C104.744 190.984 101.122 190.542 97.127 191.193L103.04 201.393L109.122 190.849ZM176.969 52.5417C179.069 56.1897 180.887 59.3331 182.993 62.9851L189.003 52.5417H176.969ZM84.4059 130.305C81.7379 126.041 80.6359 121.228 75.0989 120.105C75.0499 123.579 74.7439 126.885 75.299 130.305H84.4059ZM23.059 62.9919L29.0099 52.6086H17.0699L23.059 62.9919ZM93.1389 130.819L93.439 130.18L83.4699 124.457C84.3609 126.875 85.062 129.138 86.851 130.819H93.1389ZM123.012 124.927L122.551 124.448L112.682 130.217C115.119 130.736 117.308 131.195 119.782 130.483L123.012 124.927ZM73.732 96.6267C72.0133 98.209 70.7378 100.213 70.032 102.44L73.2249 107.819L73.736 107.576L73.732 96.6267ZM97.6679 87.9607L97.5039 88.5481L103.009 91.7039C104.939 90.5579 107.043 89.9227 108.752 87.9607H97.6679ZM136.175 102.074L132.413 95.5017V108.727C133.956 106 135.032 104.098 136.175 102.077V102.074ZM93.0359 74.2151C90.8409 73.3713 88.4397 73.2216 86.157 73.7869L83.042 79.3127L83.55 79.6707L93.0359 74.2151ZM93.9229 114.605V107.154L88.437 103.949L88.0129 104.467L93.9229 114.605ZM88.1129 99.5911L88.571 100.106L93.912 96.9568V89.5139L88.1129 99.5911ZM117.938 104.619L117.582 104.102L112.202 107.143V114.566L117.938 104.619ZM96.8329 115.919H109.033L102.956 112.46L96.8329 115.919ZM95.589 96.1018L101.429 92.7019C99.395 91.3779 97.9 89.96 95.589 89.74V96.1018ZM148.924 124.857C147.604 126.548 146.573 128.447 145.875 130.476C147.923 130.804 150.012 130.789 152.055 130.431L148.924 124.857ZM101.404 111.632C99.404 110.216 97.776 109.019 95.693 108.574V114.895L101.404 111.632ZM103.028 45.4851L99.838 51.0417H106.21C105.48 49.02 104.404 47.1414 103.028 45.49V45.4851ZM94.0349 98.9851C91.9603 99.619 90.0653 100.735 88.5049 102.242C90.3839 103.351 91.9349 104.584 94.0349 105.125V98.9851ZM146.093 73.9006C146.546 75.961 147.623 77.8324 149.176 79.26L152.269 73.9006H146.093ZM112.133 105.523C114.157 104.17 116.148 103.647 117.555 101.875L112.32 98.8748C111.884 101.064 111.821 103.312 112.133 105.523ZM102.884 158.896L106.184 153.254H99.6259L102.884 158.896ZM110.36 108.47C108.211 109.344 106.36 110.091 104.866 111.779C106.722 112.818 108.234 114.073 110.36 114.622V108.47ZM57.167 124.601C55.955 126.695 54.5179 128.074 54.3669 130.263H60.3669L57.167 124.601ZM54.0349 73.7498C55.1879 75.7778 55.8269 77.5809 57.4179 79.1189L60.447 73.7498H54.0349ZM104.426 92.6257C106.767 93.8257 108.238 95.198 110.401 95.636C110.501 93.559 110.824 91.7168 110.111 89.5178L104.426 92.6257ZM75.5869 89.0828L77.9089 84.9661C75.6009 85.6491 74.8199 86.6718 75.5859 89.0828H75.5869ZM77.636 118.743C76.645 117.911 76.9359 116.165 75.4309 115.697C74.8859 117.64 75.615 118.665 77.636 118.743ZM105.236 132.43H100.945C102.418 134.119 103.616 134.049 105.233 132.43H105.236ZM130.286 115.249L128.149 119.275C130.401 118.549 131.113 117.549 130.286 115.249Z"
          fill="#f0f0f0" />
      <defs>
          <radialGradient id="paint0_radial_667_13795" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(103.025 102.35) scale(102.738 102.418)">
              <stop offset="0.006" stop-color="#AEB0B7" />
              <stop offset="0.316" stop-color="#A9A9A8" />
              <stop offset="0.354" stop-color="#A9A9A6" />
              <stop offset="0.5" stop-color="#9A9D9E" />
              <stop offset="0.674" stop-color="#838C92" />
              <stop offset="1" stop-color="#657076" />
          </radialGradient>
      </defs>
  </g>

  <image style="transform:translate(215px, 210px) scale(0.15)"
        href="data:image/png;base64,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"
        height="300" width="300" />	
	`;
};

function generateSVGRareSparkle(isRare) {
  if (isRare) {
    return `
			<g style="transform:translate(226px, 392px)">
        <rect width="36px" height="36px" rx="8px" ry="8px" fill="none" stroke="rgba(255,255,255,0.2)" />
			<g>
      <path style="transform:translate(6px,6px)" d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z" fill="white" />',
			<animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s" repeatCount="indefinite"/></g></g>
      `;
  } else {
    return "";
  }
};
