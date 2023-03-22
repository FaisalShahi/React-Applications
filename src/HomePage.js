import DataChart from './DataChart'
import mainLogo from "./media/mainLogo.png";
import mutualFunds from "./media/mutualFunds.svg";
import alwaysInSync from "./media/alwaysInSync.svg";
import androidApp from "./media/androidApp.webp";
import beginning from "./media/beginning.png";
import diversify from "./media/diversify.png";
import fixedDeposits from "./media/fixedDeposits.svg";
import futuresOptions from "./media/futuresOptions.svg";
import howToSelect from "./media/howToSelect.png";
import iosApp from "./media/iosApp.webp";
import IPO from "./media/IPO.svg";
import productsBanner from "./media/productsBanner.png";
import shieldInvestock from "./media/shieldInvestock.png";
import stayOnTop from "./media/stayOnTop.svg";
import stocks from "./media/stocks.svg";
import press1 from "./media/press1.svg";
import press2 from "./media/press2.svg";
import press3 from "./media/press3.svg";
import press4 from "./media/press4.svg";
import support from "./media/support.png";
import user1 from "./media/user1.png";
import user2 from "./media/user2.jpeg";
import user3 from "./media/user3.jpeg";
import usStocks from "./media/usStocks.svg";
import webApp from "./media/webApp.webp";

export default function HomePage() {

    return <div>

        {/* Navigation */}
        <div class="InveStock_Top">
            <div class="InveStock_logo">
                <img src={mainLogo} />
            </div>

            <div class="InveStock_searchContainer">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="What are you looking for today?" />
            </div>

            <div class="InveStock_LoginRegister">
                <button>Login/Register</button>
            </div>
        </div>

        {/* Mid body */}
        <div class="middle_part">

            <div class="Investock_Middle_Left">
                <h2 class="InvestIn">
                    Invest in
                    <div class="Slidder_vertical">
                        <span class="Stocks_Color">Stocks</span>
                        <span class="MutualFunds_Color">Mutual Funds</span>
                        <span class="FuturesOptions_Color">Futures & Options</span>
                        <span class="UsStocks_Color">US Stocks</span>
                        <span class="IPO_Color">IPO</span>
                        <span class="FDs_Color">FDs</span>
                    </div>
                </h2>
                <div class="Investock_Middle_Left_Text">
                    Trusted by <span style={{ fontWeight: "bold" }}>Millions</span> of Indians. Start investing today.
                </div>
                <div class="InveStock_Started_Container">
                    <button class="Goww_StartedButton">Get Started</button>
                </div>
            </div>

            <div class="Investock_Middle_Right">
                <div class="Investock_middle_col2">
                    <a class="mutualFunds" href="#">
                        <img src={mutualFunds} width="49px" height="49px" />
                        <h3>Data Chart</h3>
                    </a>
                    <a class="Stocks" href="#">
                        <img src={stocks} width="49px" height="49px" /><h3>Mutual Funds</h3>
                    </a>
                </div>

                <div class="Investock_middle_col2">
                    <a class="FuturesOptions" href="#">
                        <img src={futuresOptions} width="49px" height="49px" />
                        <h3>Futures & Options</h3>
                    </a>
                    <a class="usStocks" href="#">
                        <img src={usStocks} width="49px" height="49px" />
                        <h3>US Stocks</h3>
                    </a>
                </div>

                <div class="Investock_middle_col2">
                    <a class="ipo" href="#">
                        <img src={IPO} width="49px" height="49px" />
                        <h3>IPO</h3>
                    </a>

                    <a class="fixedDeposit" href="#">
                        <img src={fixedDeposits} width="49px" height="49px" />
                        <h3>Fixed Deposit</h3>
                    </a>

                </div>
            </div>

        </div>

        {/* Our Product */}
        <div class="InveStockProduct">
            <div class="OurProduct_Text">OUR PRODUCTS</div>
            <h2 class="yourMoneyYourChoice_Text">Your Money. Your Choice.</h2>

            <div class="InveStockProduct_Navbar">

                <div class="InveStockProduct_StocksDetails">
                    <div class="InveStockProduct_StocksText">Stocks</div>
                </div>

                <div class="InveStockProduct_MutualFundsDetails">
                    <div class="InveStockProduct_MutualFundsText">Mutual Funds</div>
                </div>

                <div class="InveStockProduct_UsStocksDetails">
                    <div class="InveStockProduct_UsstocksText">US Stocks</div>
                </div>

                {/* <span class="NavbarUnderlineActive"></span> */}
            </div>

            <div class="InveStockProduct_Display">
                <div class="InveStockProduct_StocksDetails_Display">
                    <div class="InveStockProduct_StocksDetails_Display_LeftPart">
                        <img src={productsBanner} width="562px" height="355px" class="ChangeImageAccordingNavigation" />
                    </div>
                    <div class="InveStockProduct_StocksDetails_Display_RightPart">
                        <h2><span class="ZeroText">Free</span> <span class="InsideContent">account opening</span></h2>
                        <div class="stocksDetails_Text">
                            Invest in Google, Apple, Netflix and many more US companies that you love without any brokerage fees.
                        </div>
                        <div class="InveStockProduct_Button_CreateAccountFree">
                            <button>Create Account For Free</button>
                        </div>
                    </div>

                </div>

            </div>

            <div class="veiwAllProduct_Container">
                <a class="text" href="#">
                    View all Product
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>

        {/* Trusted By Container */}
        <div class="InveStock_TrustedByContainer">
            <div class="InveStock_TrustedBackgroundImage">
                <div class="InveStockTrusted_Left">
                    <h2 class="InveStockTrusted_Left_Heading">
                        Trusted by <br />
                        20 million+ users

                    </h2>
                    <div class="InveStockTrusted_left_Text">
                        Our cutting-edge technology ensure that all your information remains
                        fully encrypted and secure.
                    </div>
                </div>
                <div class="InveStockTrusted_right"></div>
            </div>
        </div>

        {/* Keep Learning Keep Investocking */}
        <div class="InveStockLearningSection">
            <h2 class="InveStockLearning_Heading">Keep learning. Keep Investocking.</h2>

            <div class="InveStockLearning_Container">
                <a href="" class="howToSelect">
                    <div class="InveStockLeaning_Image">
                        <img src={howToSelect} />
                    </div>
                    <div class="InveStockLearning_Details">
                        How to Select/Pick Stocks for
                        Intraday
                    </div>

                </a>
                <a href="" class="beginnersGuide">
                    <div class="InveStockLeaning_Image">
                        <img src={beginning} />
                    </div>
                    <div class="InveStockLearning_Details">
                        Beginners to Guide to Mutual
                        Funds
                    </div>
                </a>
                <a href="" class="howToDiversify">
                    <div class="InveStockLeaning_Image">
                        <img src={diversify} />
                    </div>
                    <div class="InveStockLearning_Details">
                        How to Diversify in the Time of
                        Market Volatility
                    </div>
                </a>
            </div>

            <div class="InveStockLearning_moreSection">
                <a href="">
                    View all article
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>

        {/* In The Press */}
        <div class="InveStockInPressSection">
            <div class="InveStockInPressSection_Heading">
                <h1 class="InveStockInpressSection_Text">In The Press</h1>
            </div>
            <div class="InveStockInPress_Name">
                <img src={press1} />
                <img src={press2} />
                <img src={press3} />
                <img src={press4} />
            </div>
        </div>

        {/* Creating proud investors */}
        <div class="InveStockInvestor">
            <div class="InveStockInvestor_top">
                <div class="headingandDetails">
                    <h2>Creating proud investors.</h2>
                    <p>You can feel the pride of being a InveStock investor in their words.</p>
                </div>
                <div class="InveStockInvestor_moreSection">
                    <a href="#">
                        View More <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div class="InveStockInvestor_ReviewsContainer">
                <div class="InveStockInvestor_ReviewBox">
                    <div class="InveStockInvestor_Profile_star">
                        <div class="InveStockInvestor_image">
                            <img src={user1} />
                        </div>
                        <div class="InveStockInvestor_Star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="InveStockInvestor_Telling">
                        <p>
                            “InveStock.in was the platform where I
                            first got onboard to MF and I would
                            have to say, even for a beginner like
                            me it made things quite easier to
                            explore and invest.
                        </p>

                        <div class="InveStockInvestor_Name_profession">
                            <div class="InveStockInvestor_Name">Ankit Puri</div>
                            <div class="InveStockInvestor_Profession">Product Specialist, Google</div>
                        </div>
                    </div>
                </div>
                <div class="InveStockInvestor_ReviewBox">
                    <div class="InveStockInvestor_Profile_star">
                        <div class="InveStockInvestor_image">
                            <img src={user2} />
                        </div>
                        <div class="InveStockInvestor_Star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="InveStockInvestor_Telling">
                        <p>
                            “Actually, the UI is extremely simple
                            and easy for users to adapt, that’s
                            what makes it unique. Many of my
                            referrals have also joined and
                            enjoying InvestockW.
                        </p>

                        <div class="InveStockInvestor_Name_profession">
                            <div class="InveStockInvestor_Name">Amit Sharma</div>
                            <div class="InveStockInvestor_Profession">Solution Architect, Amazon Web Services</div>
                        </div>
                    </div>
                </div>
                <div class="InveStockInvestor_ReviewBox">
                    <div class="InveStockInvestor_Profile_star">
                        <div class="InveStockInvestor_image">
                            <img src={user3} />
                        </div>
                        <div class="InveStockInvestor_Star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="InveStockInvestor_Telling">
                        <p>
                            “If you are one of those who would
                            like to take control of how you
                            save, use InveStock. It’s ridiculously
                            easy portal. It just took me 5 mins
                            to set up and invest.
                        </p>

                        <div class="InveStockInvestor_Name_profession">
                            <div class="InveStockInvestor_Name">Roopa Ambekar</div>
                            <div class="InveStockInvestor_Profession">Founder of Uber Medspa & Style Lounge</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Invest anywhere */}
        <div class="InvestAnyWhereContainer">
            <div class="InvestAnyWhereContainer_Left">
                <h2 class="InvestAnyWhereContainer_Left_Text">Invest anywhere, anytime.</h2>
                <p>Don’t worry about which device to use. Because we’re in every one of them.</p>

                <div class="ListContainer">
                    <div class="ListContainer_List">
                        <div class="ListContainer_Icon">
                            <img src={stayOnTop} />
                        </div>
                        <div class="ListContainer_Details">
                            <div class="ListContainer_Details_Heading">Stay on top of everything</div>
                            <div class="ListContainer_Details_Heading_Description">Keep track of your investments at anytime with InveStock.</div>
                        </div>
                    </div>
                    <div class="ListContainer_List">
                        <div class="ListContainer_Icon">
                            <img src={alwaysInSync} />
                        </div>
                        <div class="ListContainer_Details">
                            <div class="ListContainer_Details_Heading">Always in Sync</div>
                            <div class="ListContainer_Details_Heading_Description">InveStock will take care of synchronizing data so you can focus on investing.</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="InvestAnyWhereContainer_Right">
                <div class="InvestAnyWhereContainer_Right_1">
                    <div class="applist">
                        <img src={iosApp} />
                    </div>
                    <div class="applist">
                        <img src={androidApp} />
                    </div>
                </div>
                <div class="InvestAnyWhereContainer_Right_1">
                    <div class="applist">
                        <img src={webApp} />
                    </div>
                </div>
            </div>
        </div>

        {/* Support Section */}
        <div class="SupportSection">
            <div class="SupportContainer">
                <div class="SupportSection_left">
                    <h2>We’re with you, at every step.</h2>
                    <p>For any query you have, find the answer
                        quickly on our Help & Support. Need a
                        little more help? We’re happy to talk via call or chat.
                    </p>
                    <button>Get In Touch</button>
                </div>
                <div class="SupportSection_Right">
                    <img src={support} width="261px" height="327px" />
                </div>
            </div>
        </div>

        <div class="InveStockPieChartSection">
            <div class="InveStockInPressSection_Heading">
                <h1 class="InveStockInpressSection_Text">InveStock Consumer Base</h1>
            </div>
            {/* <div class="InveStockInPress_Name"> */}
                <div class="PieChart">
                    <DataChart />
                </div>
            {/* </div> */}
        </div>



    </div>
}