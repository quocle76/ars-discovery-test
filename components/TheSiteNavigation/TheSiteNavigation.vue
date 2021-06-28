<template>
  <div class="asr-top-menu">
    <div class="header-banner">
      <div
        class="asr-top-header"
        signintitle="Sign in"
      >
        <div
          class="row-header"
          :class="{ 'sticky-menu': applyWithBgClass }"
        >
          <div class="menu-header">
            <button
              aria-label="Menu button"
              class="active-button"
              @click="navigationMenuActive = !navigationMenuActive"
            >
              <div
                class="icon-menu"
                :class="{'active-menu': navigationMenuActive}"
              ></div>
            </button>
            <div class="logo-header">
              <a href="/en"><img
                  src="/content/dam/tal/media/images/general/ia_pic/Brand logo ASR 2.svg"
                  alt="Discover ASR EN"
                  title="Discover ASR EN"
                  aria-label="Discover ASR EN"
                  class="img-header"
                /></a>
            </div>
          </div>
          <div class="icon-top-header">
            <div class="usercart-header right">
              <a
                href="javascript:void(0)"
                aria-label="Signin Icon"
                class="signin-icon"
              >
                <div class="asr-icon-svg right-header-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <g
                      fill="inherit"
                      fill-rule="evenodd"
                    >
                      <g fill="inherit">
                        <path
                          d="M14.259 5.698c-.002-2.347-1.933-4.276-4.28-4.274-2.347.001-4.274 1.93-4.273 4.278 0 2.347 1.932 4.277 4.278 4.276 2.345-.002 4.276-1.935 4.275-4.28zM.539 19.243c-.402-.164-.552-.46-.538-.894.095-2.918 1.226-5.353 3.386-7.312.333-.301.778-.28 1.05.034.271.313.228.746-.11 1.047-1.34 1.195-2.227 2.664-2.65 4.408-.101.414-.156.84-.235 1.28H18.51c-.053-.348-.083-.692-.16-1.026-.679-2.919-2.395-4.975-5.146-6.168-.143-.063-.254-.05-.39.028-3.38 1.941-7.65.004-8.43-3.821C3.747 3.702 5.854.627 8.997.084c3.17-.547 6.189 1.624 6.63 4.784.228 1.631-.18 3.102-1.204 4.397l-.152.19c-.005.006-.007.014-.02.044.065.036.13.075.198.11 2.937 1.536 4.718 3.936 5.364 7.181.064.325.099.656.147.983v.936c-.1.256-.278.434-.535.534H.54z"
                          transform="translate(5 5)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <!-- Toggle visibility between logged in users, show sign out button -->
                  <!-- Hide when user is logged in -->
                  <span
                    v-if="!userIsLoggedIn"
                    @click="onSignInButtonClick"
                  >Sign In</span>
                  <!-- Show when user is logged in -->
                  <span
                    v-else
                    @click="onSignOutButtonClick"
                  >Sign Out</span>

                </div>
              </a>
            </div>

          </div>
        </div>
        <div class="line-dash"></div>
      </div>
    </div>
    <div class="line"></div>
    <div
      class="wrap navigation-menu"
      :class="{ 'active-menu': navigationMenuActive }"
    >
      <div
        class="header"
        :class="{ 'sticky-header': applyWithBgClass }"
      >
        <div class="top-section">
          <div class="header-expand-menu">
            <div class="asr-top-header">
              <div class="row-header">
                <div class="menu-header">
                  <button
                    aria-label="Menu button"
                    class="active-button"
                    @click="navigationMenuActive = !navigationMenuActive"
                  >
                    <div
                      class="icon-menu"
                      :class="{'active-menu': navigationMenuActive}"
                    ></div>
                  </button>
                  <div class="logo-header">
                    <a href="/en"><img
                        src="/content/dam/tal/media/images/general/ia_pic/ASR Logo Expanded Menu.svg"
                        alt="Discover ASR EN"
                        title="Discover ASR EN"
                        aria-label="Discover ASR EN"
                        class="img-header"
                      /></a>
                  </div>
                </div>
                <!-- <div class="icon-top-header">
                  <div class="usercart-header right">
                    <a
                      href="javascript:void(0)"
                      aria-label="Signin Icon"
                      class="signin-icon"
                    >
                      <div class="asr-icon-svg right-header-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <g
                            fill="inherit"
                            fill-rule="evenodd"
                          >
                            <g fill="inherit">
                              <path
                                d="M14.259 5.698c-.002-2.347-1.933-4.276-4.28-4.274-2.347.001-4.274 1.93-4.273 4.278 0 2.347 1.932 4.277 4.278 4.276 2.345-.002 4.276-1.935 4.275-4.28zM.539 19.243c-.402-.164-.552-.46-.538-.894.095-2.918 1.226-5.353 3.386-7.312.333-.301.778-.28 1.05.034.271.313.228.746-.11 1.047-1.34 1.195-2.227 2.664-2.65 4.408-.101.414-.156.84-.235 1.28H18.51c-.053-.348-.083-.692-.16-1.026-.679-2.919-2.395-4.975-5.146-6.168-.143-.063-.254-.05-.39.028-3.38 1.941-7.65.004-8.43-3.821C3.747 3.702 5.854.627 8.997.084c3.17-.547 6.189 1.624 6.63 4.784.228 1.631-.18 3.102-1.204 4.397l-.152.19c-.005.006-.007.014-.02.044.065.036.13.075.198.11 2.937 1.536 4.718 3.936 5.364 7.181.064.325.099.656.147.983v.936c-.1.256-.278.434-.535.534H.54z"
                                transform="translate(5 5)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div> -->
              </div>
              <div class="line-dash"></div>
            </div>
          </div>
          <div class="my-accounts right hide-menu">
            <div
              class="asr-top-right-user-actions"
              recaptcha-host="www.recaptcha.net"
              recaptcha-sitekey="6Leqm7MUAAAAAFnYcmjqzJAzBgFNeHGmSYYz0pvF"
              policy-google='This site is protected by reCAPTCHA and the Google <u><a style="color: #003E6A;" href="https://policies.google.com/privacy" target="_blank" rel="nofollow">Privacy Policy</a></u> and <u><a style="color: #003E6A;" href="https://policies.google.com/terms" target="_blank" rel="nofollow">Terms of Service</a></u> apply.'
              label-login="Sign in"
            >
              <div class="profile-menu">
                <div class="usercart-header">
                  <a
                    href="javascript:void(0)"
                    class="signin-icon"
                  >
                    <div class="asr-icon-svg right-header-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                      >
                        <g
                          fill="inherit"
                          fill-rule="evenodd"
                        >
                          <g fill="inherit">
                            <path
                              d="M14.259 5.698c-.002-2.347-1.933-4.276-4.28-4.274-2.347.001-4.274 1.93-4.273 4.278 0 2.347 1.932 4.277 4.278 4.276 2.345-.002 4.276-1.935 4.275-4.28zM.539 19.243c-.402-.164-.552-.46-.538-.894.095-2.918 1.226-5.353 3.386-7.312.333-.301.778-.28 1.05.034.271.313.228.746-.11 1.047-1.34 1.195-2.227 2.664-2.65 4.408-.101.414-.156.84-.235 1.28H18.51c-.053-.348-.083-.692-.16-1.026-.679-2.919-2.395-4.975-5.146-6.168-.143-.063-.254-.05-.39.028-3.38 1.941-7.65.004-8.43-3.821C3.747 3.702 5.854.627 8.997.084c3.17-.547 6.189 1.624 6.63 4.784.228 1.631-.18 3.102-1.204 4.397l-.152.19c-.005.006-.007.014-.02.044.065.036.13.075.198.11 2.937 1.536 4.718 3.936 5.364 7.181.064.325.099.656.147.983v.936c-.1.256-.278.434-.535.534H.54z"
                              transform="translate(5 5)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <!-- Hide when user is logged in -->
                    <span
                      v-if="!userIsLoggedIn"
                      @click="onSignInButtonClick"
                    >Sign In</span>
                    <!-- Show when user is logged in -->
                    <span
                      v-else
                      @click="onSignOutButtonClick"
                    >Sign Out</span>
                  </a>
                  <!-- Hide when user is logged in -->
                  <span v-show="!userIsLoggedIn" class="header-text">|</span>
                  <!-- Hide when user is logged in -->
                  <a
                    v-show="!userIsLoggedIn"
                    href="javascript:void(0)"
                    aria-label="Join Now"
                    class="join-now-text"
                  ><a
                      href="https://www.discoverasr.com/en/sign-up"
                      target="_blank"
                      title="Join Now"
                      aria-label="Join Now"
                    >
                      Join Now
                    </a></a>
                </div>
              </div>
            </div>
          </div>
          <div class="group-layout">
            <div class="line-banner"></div>
          </div>
          <div class="top-navigation">
            <div
              class="asr-top-navigation width-100"
              active-url="https://discoverasr.com"
              btn-search-book-alt="Search &amp; Book"
              btn-search-text="Search "
              lang="en"
              dir="ltr"
              txt-search="Search"
              property-alert-info='If you would like to book apartments in other Australian cities, New Zealand or Fiji, please consider <a href="https://www.questapartments.com.au" target="_blank">Quest Apartment Hotels</a>'
            >
              <div class="logo-header">
                <a href="https://discoverasr.com"><img
                    src="/content/dam/tal/media/images/general/ia_pic/Brand logo ASR 2.svg"
                    alt="Discover ASR EN"
                    title="Discover ASR EN"
                    aria-label="Discover ASR EN"
                    class="img-header"
                  /></a>
              </div>
              <ul
                v-if="userIsLoggedIn"
                class="sidebar-left d-md-none"
              >
                <li class="sidebar-menu">
                  <a
                    href="javascript:void(0)"
                    class="link-ourbrands"
                    @click="onSignOutButtonClick"
                  >
                    Sign Out
                  </a>

                  <!---->
                </li>
              </ul>
              <ul class="sidebar-menu search-button">
                <li>
                  <a
                    class="asr-button primary reverse"
                    aria-label="Search &amp; Book"
                    href="https://discoverasr.com"
                    target="_blank"
                  >
                    Search &amp; Book
                  </a>
                </li>
              </ul>
              <ul class="sidebar-left">
                <li class="sidebar-menu">
                  <a
                    href="/en/offers"
                    class="link-ourbrands"
                    target="_blank"
                  >
                    View Offers
                  </a>
                </li>
                <li
                  id="link-1-navigation"
                  :class="{'active-navigation': selectedItem === 'DiscoverBrands'}"
                  class="sidebar-menu"
                >
                  <a
                    href="javascript:void(0)"
                    class="link-ourbrands"
                    :class="{'active-navigation': selectedItem === 'DiscoverBrands'}"
                    @click="handleExpandSubNavigation('DiscoverBrands')"
                  >
                    Discover Our Brands
                    <i
                      data-icon="keyboard_arrow_down"
                      class="asr-icon icon-without-innertext arrow-down"
                    ></i></a>
                  <div class="wrap-sub-navigation">
                    <ul
                      v-if="selectedItem === 'DiscoverBrands'"
                      class="menu-sub image-list"
                    >
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Ascott-The-Residence-Desktop.jpg"
                            alt="Ascott The Residence"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Somerset-Desktop.jpg"
                            alt="Somerset Serviced Residence"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-The-Crest-Collection-Desktop.jpg"
                            alt="The Crest Collection"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Quest-Desktop.jpg"
                            alt="Quest Apartment Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Citadines-Desktop.jpg"
                            alt="Citadines Apart'hotel"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-lyf-Desktop.jpg"
                            alt="lyf"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Preference-Desktop.jpg"
                            alt="Preference Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Vertu-Desktop.jpg"
                            alt="Vertu Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-HARRIS-Desktop.jpg"
                            alt="Harris Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Citadines-Connect-Desktop.jpg"
                            alt="Citadines Connect"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Fox-Desktop.jpg"
                            alt="Fox Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Yello-Desktop.jpg"
                            alt="Yello Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-Fox-lite-Desktop.jpg"
                            alt="Fox Lite Hotels"
                          ></a></li>
                      <li class="link-item"><a
                          href="/en/our-brands"
                          class="nav-logo"
                          target="_blank"
                        ><img
                            src="/content/dam/tal/media/images/mega-nav/Mega-Navigation-POP!-Desktop.jpg"
                            alt="POP! Hotels"
                          ></a></li>
                      <div class="link-center wrap"><a
                          href="/en/our-brands"
                          class="asr-button secondary"
                          target="_blank"
                        >See All Brands</a></div>
                    </ul>
                  </div>
                  <!---->
                </li>
                <li class="sidebar-menu">
                  <a
                    href="/en/find-residence/property?view=property"
                    class="link-ourbrands"
                    target="_blank"
                  >
                    Our Properties
                  </a>
                </li>
                <li
                  id="link-3-navigation"
                  class="sidebar-menu"
                  :class="{'active-navigation': selectedItem === 'MembersBenefit'}"
                >
                  <a
                    href="javascript:void(0)"
                    class="link-ourbrands"
                    :class="{'active-navigation': selectedItem === 'MembersBenefit'}"
                    @click="handleExpandSubNavigation('MembersBenefit')"
                  >
                    Member Benefits
                    <i
                      data-icon="keyboard_arrow_down"
                      class="asr-icon icon-without-innertext arrow-down"
                    ></i></a>
                  <div class="wrap-sub-navigation">
                    <ul
                      v-if="selectedItem === 'MembersBenefit'"
                      class="menu-sub column-list wrap"
                    >
                      <div class="menu-sub-item"><a
                          href="#"
                          class="brand-category"
                        >
                          <h3>
                            Explore Benefits
                          </h3>
                        </a>
                        <li class="ourbrand-item body-1"><a href="/en/member/benefits" target="_blank">Membership Overview</a>
                          <!---->
                        </li>
                        <li class="ourbrand-item body-1"><a href="/en/business-travel" target="_blank">For Business</a>
                          <!---->
                        </li>
                      </div>
                      <!---->
                      <div class="menu-sub-item"><a
                          href="#"
                          class="brand-category"
                        >
                          <h3>
                            Use ASR Points
                          </h3>
                        </a>
                        <li class="ourbrand-item body-1"><a href="/en/member/earn" target="_blank">Earn</a>
                          <!---->
                        </li>
                        <li class="ourbrand-item body-1"><a href="/en/member/redeem" target="_blank">Redeem</a>
                          <!---->
                        </li>
                        <li class="ourbrand-item body-1"><a href="/en/member/buy-points" target="_blank">Buy &amp; Gift</a>
                          <div class="asr-badge new-label pill">
                            NEW
                          </div>
                        </li>
                        <li class="ourbrand-item body-1"><a href="/en/member/partner" target="_blank">Exchange Points</a>
                          <!---->
                        </li>
                      </div>
                      <!---->
                      <div class="menu-sub-item"><a
                          href="#"
                          class="brand-category"
                        >
                          <h3>
                            Support
                          </h3>
                        </a>
                        <li class="ourbrand-item body-1"><a href="/en/asrp" target="_blank">Participating Properties</a>
                          <!---->
                        </li>
                        <li class="ourbrand-item body-1"><a href="/en/statusmatch" target="_blank">Elite Status Match</a>
                          <!---->
                        </li>
                        <li class="ourbrand-item body-1"><a href="/en/member/support" target="_blank">Frequently Asked Questions</a>
                          <!---->
                        </li>
                      </div>
                      <!---->
                      <!---->
                      <div class="navigation-logo"><a
                          href="/en/member/benefits"
                          class="navigation-link"
                          target="_blank"
                        ><img
                            src=""
                            alt="Discover member offers"
                            class="navigation-img"
                          ></a> <a
                          href="/en/member/benefits"
                          class="navigation-button"
                          target="_blank"
                        >
                          Explore Now
                        </a>
                        <div class="navigation-title">
                          <h3>Ascott Star Rewards Membership</h3>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <!---->
                </li>
                <li class="sidebar-menu">
                  <a
                    href="/en/business-travel"
                    class="link-ourbrands"
                    target="_blank"
                  >
                    Business Travel
                  </a>
                </li>
                <li class="sidebar-menu">
                  <a
                    href="/en/find-residence/destination"
                    class="link-ourbrands"
                    target="_blank"
                  >
                    Get Inspired
                  </a>
                </li>
              </ul>
              <!---->
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <ul class="asr-bottom-section-quicklinks">
            <li>
              <a
                href="/content/discoverasr/en/booking/property-listing/search-for-reservation"
                class="button-quicklinks"
              >
                <div class="asr-common-icon icon-quicklinks">
                  <div class="asr-icon-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="30px"
                      height="30px"
                      viewBox="0 0 30 30"
                      version="1.1"
                    >
                      <title>46B69B09-CCF1-43E4-A9B8-4EA1192D6623</title>
                      <g
                        id="Home-&amp;-Menu"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="DBatch1-R4-1A2-Homepage"
                          transform="translate(-926.000000, -11.000000)"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                        >
                          <g
                            id="Group"
                            transform="translate(120.000000, 8.000000)"
                          >
                            <g
                              id="Group-11"
                              transform="translate(806.000000, 3.000000)"
                            >
                              <g
                                id="ico/quickview"
                                transform="translate(7.000000, 6.000000)"
                              >
                                <path
                                  d="M14.0624665,17.9999571 C14.9944482,17.9999571 15.7499624,17.2444428 15.7499624,16.3124611 L15.7499624,3.93749061 C15.7499624,3.00550889 14.9944482,2.24999464 14.0624665,2.24999464 L12.3749705,2.24999464 L12.3749705,0.421873994 C12.3749705,0.188895729 12.1860748,0 11.9530965,0 L11.6718472,0 C11.4388689,0 11.2499732,0.188895729 11.2499732,0.421873994 L11.2499732,2.24999464 L4.49998927,2.24999464 L4.49998927,0.421873994 C4.49998927,0.188895729 4.31109354,0 4.07811528,0 L3.79686595,0 C3.56388768,0 3.37499195,0.188895729 3.37499195,0.421873994 L3.37499195,2.24999464 L1.68749598,2.24999464 C0.755514251,2.24999464 0,3.00550889 0,3.93749061 L0,16.3124611 C0,17.2444428 0.755514251,17.9999571 1.68749598,17.9999571 L14.0624665,17.9999571 Z M14.6249651,5.62498659 L1.12499732,5.62498659 L1.12499732,3.93749061 C1.12499732,3.62733358 1.37733894,3.37499195 1.68749598,3.37499195 L14.0624665,3.37499195 C14.3726235,3.37499195 14.6249651,3.62733358 14.6249651,3.93749061 L14.6249651,5.62498659 Z M14.0624665,16.8749598 L1.68749598,16.8749598 C1.37733894,16.8749598 1.12499732,16.6226181 1.12499732,16.3124611 L1.12499732,6.74998391 L14.6249651,6.74998391 L14.6249651,16.3124611 C14.6249651,16.6226181 14.3726235,16.8749598 14.0624665,16.8749598 Z M6.98701337,14.7224686 L11.7257487,10.021739 C11.8912986,9.85749374 11.8923972,9.59018328 11.7281176,9.42463344 L11.4307665,9.12484473 C11.2665213,8.95929489 10.9992108,8.95826493 10.833661,9.12247581 L6.69288947,13.2300138 L4.91952868,11.4515718 C4.75490581,11.2864683 4.48759535,11.2860906 4.3224575,11.4507135 L4.02345842,11.7488543 C3.85835491,11.9135115 3.85797725,12.1808219 4.02260012,12.3459598 L6.39066317,14.7208206 C6.55501138,14.8856495 6.82177252,14.8863705 6.98701337,14.7224686 Z"
                                  id="c"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <span>Find my reservation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./TheSiteNavigation.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
