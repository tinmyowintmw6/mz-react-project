import React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { Section } from "src/styles/components";
import { NextSeo } from 'next-seo'
import styled from "styled-components"
import { colors } from "src/styles/constants"


const TxtTitle = styled.div`
  position: relative;
  width: 100%; 
  h1 {
    color: ${colors.titleText};
    font-size: 29px;
    font-family: 'fontstyle-bold';
    margin-bottom: 3rem;
    } 
    h5 {
        color: ${colors.titleText};
        font-size: 18px;
        font-family: 'fontStyle-bold';
    }
    p {
        text-align: justify;
    }

`
export default function termsCondition() {
  const SEO = {
    title: 'Terms & Condition',
    openGraph: {
      title: 'Terms & Condition'
    }
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <TxtTitle>
            <h1>Terms & Condition</h1>
            <h5>1. Introduction</h5>
            <p>Super Seven Stars International Trading Limited ("MZ Online Market" or "we") operates an ecommerce platform consisting of a website and mobile application ("marketplace"), together with supporting logistics and payment infrastructure, for the sale and purchase of consumer products in Myanmar ("territory"). These general terms and conditions shall apply to buyers and sellers on the marketplace and shall govern your use of the marketplace and related services. By using our marketplace, you accept these general terms and conditions in full. If you disagree with these general terms and conditions or any part of these general terms and conditions, you must not use our marketplace. If you use our marketplace in the course of a business or other organizational project, then by so doing you:</p>
            <ul>
              <li>confirm that you have obtained the necessary authority to agree to these general terms and conditions;</li>
              <li>bind both yourself and the person, company or other legal entity that operates that business or organizational project, to these general terms and conditions; and</li>
              <li>gree that "you" in these general terms and conditions shall reference both the individual user and the relevant person, company or legal entity unless the context requires otherwise.</li>
            </ul>

            <h5>2. Registration and account</h5>
            <ul>
              <li>You may not register with our marketplace if you are under 18 years of age (by using our marketplace or agreeing to these general terms and conditions, you warrant and represent to us that you are at least 18 years of age).</li>
              <li>You may register for an account with our marketplace by completing and submitting the registration form on our marketplace</li>
              <li>You represent and warrant that all information provided in the registration form is complete and accurate.</li>
              <li>If you register for an account with our marketplace, you will be asked to provide an email address/user ID and password and you agree to:</li>
                <ul>
                  <li>keep your password confidential;</li>
                  <li>notify us in writing immediately</li>
                  <li>if you become aware of any disclosure of your password; and</li>
                  <li>be responsible for any activity on our marketplace arising out of any failure to keep your password confidential, and that you may be held liable for any losses arising out of such a failure.</li>
                </ul>
              <li>Your account shall be used exclusively by you and you shall not transfer your account to any third party. If you authorize any third party to manage your account on your behalf this shall be at your own risk.</li>
              <li>We may suspend or cancel your account, and/or edit your account details, at any time in our sole discretion and without notice or explanation, providing that if we cancel any products or services you have paid for but not received, and you have not breached these general terms and conditions, we will refund you in respect of the same.</li>
              <li>You may cancel your account on our marketplace by contacting us .</li>              
            </ul>

            <h5>3. Terms and conditions of sale</h5>
            <ul>
              <li>You acknowledge and agree that:</li>
                <ul>
                  <li>the marketplace provides an online location for sellers to sell and buyers to purchase products;</li>
                  <li>we shall accept binding sales, on behalf of sellers, but MZ Online Market is not a party to the transaction between the seller and the buyer; and</li>
                  <li>a contract for the sale and purchase of a product or products will come into force between the buyer and seller, and accordingly you commit to buying or selling the relevant product or products, upon the buyer’s confirmation of purchase via the marketplace.</li>
                </ul>              
              <li>Subject to these general terms and conditions, the seller’s terms of business shall govern the contract for sale and purchase between the buyer and the seller. Notwithstanding this, the following provisions will be incorporated into the contract of sale and purchase between the buyer and the seller:</li>
                <ul>
                   <li>the price for a product will be as stated in the relevant product listing;</li>
                   <li>the price for the product must include all taxes and comply with applicable laws in force from time to time;</li>
                   <li>delivery charges, packaging charges, handling charges, administrative charges, insurance costs, other ancillary costs and charges, will only be payable by the buyer if this is expressly and clearly stated in the product listing;</li>
                   <li>products must be of satisfactory quality, fit and safe for any purpose specified in, and conform in all material respects to, the product listing and any other description of the products supplied or made available by the seller to the buyer; and</li>
                   <li>the seller warrants that the seller has good title to, and is the sole legal and beneficial owner of, the products, and that the products are not subject to any third party rights or restrictions including in respect of third party intellectual property rights and/or any criminal, insolvency or tax investigation or proceedings</li>
                 </ul>   
            </ul>

            <h5>4. Returns and refunds</h5>
            <ul>
              <li>Returns of products by buyers and acceptance of returned products by sellers shall be managed by us in accordance with the returns page on the marketplace, as may be amended from time to time. Acceptance of returns shall be in our discretion, subject to compliance with applicable laws of the territory</li>
              <li>Refunds in respect of returned products shall be managed in accordance with the refunds page on the marketplace, as may be amended from time to time. Our rules on refunds shall be exercised in our discretion, subject to applicable laws of the territory. We may offer refunds, in our discretion:</li>
                <ul>
                  <li>in respect of the product price;</li>
                  <li>local and/or international shipping fees (as stated on the refunds page); and</li>
                  <li>by way of store credits, wallet refunds, vouchers, mobile money transfer, bank transfers or such other method as we may determine from time to time.</li>
                </ul>
              <li>Returned products shall be accepted and refunds issued by MZ Online Market, for and on behalf of the seller..</li>
              <li>Changes to our returns page or refunds page shall be effective in respect of all purchases made from the date of publication of the change on our website.</li>
            </ul>

            <h5>5. Payments</h5>
            <ul>
              <li>You must make payments due under these general terms and conditions in accordance with the Payments Information and Guidelines on the marketplace.</li>
            </ul>

            <h5>6. Rules about your content</h5>
            <ul>
              <li>In these general terms and conditions, "your content" means:</li>
                <ul>
                  <li>all works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our marketplace for storage or publication, processing by, or onward transmission; and</li>
                  <li>all communications on the marketplace, including product reviews, feedback and comments.</li>
                </ul>
              <li>Your content, and the use of your content by us in accordance with these general terms and conditions, must be accurate, complete and truthful.</li>
              <li>Your content must be appropriate, civil and tasteful, and accord with generally accepted standards of etiquette and behavior on the internet, and must not:</li>
                <ul>
                  <li>be offensive, obscene, indecent, pornographic, lewd, suggestive or sexually explicit;</li>
                  <li>depict violence in an explicit, graphic or gratuitous manner; or</li>
                  <li>be blasphemous, in breach of racial or religious hatred or discrimination legislation;</li>
                  <li>be deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory or inflammatory;</li>
                  <li>cause annoyance, inconvenience or needless anxiety to any person; or constitute spam.</li>
                </ul>
              <li>Your content must not be illegal or unlawful, infringe any person's legal rights, or be capable of giving rise to legal action against any person (in each case in any jurisdiction and under any applicable law). Your content must not infringe or breach:</li>
                <ul>
                  <li>any copyright, moral right, database right, trademark right, design right, right in passing off or other intellectual property right;</li>
                  <li>any right of confidence, right of privacy or right under data protection legislation;</li>
                  <li>any contractual obligation owed to any person; or</li>
                  <li>any court order</li>
                </ul>
              <li>You must not use our marketplace to link to any website or web page consisting of or containing material that would, were it posted on our marketplace, breach the provisions of these general terms and conditions</li>
              <li>You must not submit to our marketplace any material that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.</li>
              <li>The review function on the marketplace may be used to facilitate buyer reviews on products. You shall not use the review function or any other form of communication to provide inaccurate, inauthentic or fake reviews.</li>
              <li>You must not interfere with a transaction by: (i) contacting another user to buy or sell an item listed on the marketplace outside of the marketplace; or (ii) communicating with a user involved in an active or completed transaction to warn them away from a particular buyer, seller or item; or (iii) contacting another user with the intent to collect any payments</li>
              <li>You acknowledge that all users of the marketplace are solely responsible for interactions with other users and you shall exercise caution and good judgment in your communication with users. You shall not send them personal information including credit card details.</li>
              <li>We may periodically review your content and we reserve the right to remove any content in our discretion for any reason whatsoever.</li>
              <li>If you learn of any unlawful material or activity on our marketplace, or any material or activity that breaches these general terms and conditions, you may inform us</li>
            </ul>

            <h5>7. Our rights to use your content</h5>
            <ul>
              <li>You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, store, adapt, publish, translate and distribute your content across our marketing channels and any existing or future media.</li>
              <li>You grant to us the right to sub-license the rights licensed under section 7.1</li>
              <li>You grant to us the right to bring an action for infringement of the rights licensed under section 7.1.</li>
              <li>You hereby waive all your moral rights in your content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your content have been waived to the maximum extent permitted by applicable law</li>
              <li>Without prejudice to our other rights under these general terms and conditions, if you breach our rules on content in any way, or if we reasonably suspect that you have breached our rules on content, we may delete, unpublished or edit any or all of your content.</li>
            </ul>

            <h5>8. Use of website and mobile applications</h5>
            <ul>
              <li>In this section 8 words "marketplace" and "website" shall be used interchangeably to refer to MZ Online Market’s websites and mobile applications.</li>
              <li>You may:</li>
                <ul>
                  <li>view pages from our website in a web browser;</li>
                  <li>download pages from our website for caching in a web browser;</li>
                  <li>print pages from our website for your own personal and noncommercial use, providing that such printing is not systematic or excessive;</li>
                  <li>stream audio and video files from our website using the media player on our website; and</li>
                  <li>use our marketplace services by means of a web browser, subject to the other provisions of these general terms and conditions.</li>
                </ul>
              <li>Except as expressly permitted by section 8.2 or the other provisions of these general terms and conditions, you must not download any material from our website or save any such material to your computer</li>
              <li>You may only use our website for your own personal and business purposes in respect of selling or purchasing products on the marketplace</li>
              <li>Except as expressly permitted by these general terms and conditions, you must not edit or otherwise modify any material on our website.</li>
              <li>Unless you own or control the relevant rights in the material, you must not:</li>
              <ul>
                  <li>republish material from our website (including republication on another website);</li>
                  <li>sell, rent or sub-license material from our website;</li>
                  <li>show any material from our website in public;</li>
                  <li>exploit material from our website for a commercial purpose; or</li>
                  <li>Redistribute material from our website.</li>
                </ul>
              <li>Notwithstanding section 8.6, you may forward links to products on our website and redistribute our newsletter and promotional materials in print and electronic form to any person.</li>
              <li>We reserve the right to suspend or restrict access to our website, to areas of our website and/or to functionality upon our website. We may, for example, suspend access to the website during server maintenance or when we update the website. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on the website.</li>
              <li>You must not:</li>
                <ul>
                  <li>use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability, accessibility, integrity or security of the website;</li>
                  <li>use our website in any way that is unethical, unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;</li>
                  <li>hack or otherwise tamper with our website;</li>
                  <li>probe, scan or test the vulnerability of our website without our permission;</li>
                  <li>circumvent any authentication or security systems or processes on or relating to our website;</li>
                  <li>use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
                  <li>impose an unreasonably large load on our website resources (including bandwidth, storage capacity and processing capacity);</li>
                  <li>decrypt or decipher any communications sent by or to our website without our permission;</li>
                  <li>conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent;</li>
                  <li>access or otherwise interact with our website using any robot, spider or other automated means, except for the purpose of search engine indexing;</li>
                  <li>use our website except by means of our public interfaces;</li>
                  <li>violate the directives set out in the robots.txt file for our website;</li>
                  <li>use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing); or</li>
                  <li>do anything that interferes with the normal use of our website.</li>
                </ul>
            </ul>
            <h5>9. Copyright and trademarks</h5>
            <ul>
              <li>Subject to the express provisions of these general terms and conditions:</li>
                <ul>
                  <li>we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and</li>
                  <li>all the copyright and other intellectual property rights in our website and the material on our website are reserved.</li>
                </ul>
              <li>MZ Online Market’s logos and our other registered and unregistered trademarks are trademarks belonging to us; we give no permission for the use of these trademarks, and such use may constitute an infringement of our rights.</li>
              <li>The third party registered and unregistered trademarks or service marks on our website are the property of their respective owners and we do not endorse and are not affiliated with any of the holders of any such rights and as such we cannot grant any license to exercise such rights</li>
            </ul>
            <h5>10. Data Privacy</h5>
            <ul>
              <li>Buyers agree to processing of their personal data in accordance with the terms of MZ Online Market’s Privacy and Cookie Notice</li>
              <li>MZ Online Market shall process all personal data obtained through the marketplace and related services in accordance with the terms of our Privacy and Cookie Notice and Privacy Policy.</li>
              <li>Sellers shall be directly responsible to buyers for any misuse of their personal data and MZ Online Market shall bear no liability to buyers in respect of any misuse by sellers of their personal data.</li>
            </ul>
            <h5>11. Due diligence and audit rights</h5>
            <ul>
              <li>We operate an anti-money laundering compliance program and reserve the right to perform due diligence checks on all users of the marketplace.</li>
              <li>You agree to provide to us all such information, documentation and access to your business premises as we may require:</li>
                <ul>
                  <li>in order to verify your adherence to, and performance of, your obligations under this Agreement;</li>
                  <li>for the purpose of disclosures pursuant to a valid order by a court or other governmental body; or</li>
                  <li>as otherwise required by law or applicable regulation</li>
                </ul>
            </ul>
            <h5>12. MZ Online Market’s role as a marketplace</h5>
            <ul>
              <li>You acknowledge that:</li>
                <ul>
                  <li>we do not confirm the identity of all marketplace users, check their credit worthiness or bona fides, or otherwise vet them;</li>
                  <li>we do not check, audit or monitor all information contained in listings;</li>
                  <li>we are not party to any contract for the sale or purchase of products advertised on the marketplace;</li>
                  <li>we are not involved in any transaction between a buyer and a seller in any way, save that we facilitate a marketplace for buyers and sellers and process payments on behalf of sellers;</li>
                  <li>we are not the agents for any buyer or seller</li>
                </ul>
              <p>and accordingly we will not be liable to any person in relation to the offer for sale, sale or purchase of any products advertised on our marketplace; furthermore we are not responsible for the enforcement of any contractual obligations arising out of a contract for the sale or purchase of any products and we will have no obligation to mediate between the parties to any such contract.</p>
              <li>We do not warrant or represent:</li>
                <ul>
                  <li>the completeness or accuracy of the information published on our marketplace;</li>
                  <li>that the material on the marketplace is up to date;</li>
                  <li>that the marketplace will operate without fault; or</li>
                  <li>that the marketplace or any service on the marketplace will remain available.</li>
                </ul>
              <li>We reserve the right to discontinue or alter any or all of our marketplace services, and to stop publishing our marketplace, at any time in our sole discretion without notice or explanation.</li>
              <li>We do not guarantee any commercial results concerning the use of the marketplace.</li>
              <li>To the maximum extent permitted by applicable law and subject to section 13.1 below, we exclude all representations and warranties relating to the subject matter of these general terms and conditions, our marketplace and the use of our marketplace.</li>
            </ul>

            <h5>13. Limitations and exclusions of liability</h5>
            <ul>
              <li>Nothing in these general terms and conditions will:</li>
                <ul>
                  <li>limit any liabilities in any way that is not permitted under applicable law; or</li>
                  <li>exclude any liabilities or statutory rights that may not be excluded under applicable law.</li>
                </ul>
              <li>The limitations and exclusions of liability set out in this section 13 and elsewhere in these general terms and conditions:</li>
                <ul>
                  <li>are subject to section 13.1; and</li>
                  <li>govern all liabilities arising under these general terms and conditions or relating to the subject matter of these general terms and conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in these general terms and conditions</li>
                </ul>
              <li>In respect of the services offered to you free of charge we will not be liable to you for any loss or damage of any nature whatsoever.</li>
              <li>Our aggregate liability to you in respect of any contract to provide services to you under these general terms and conditions shall not exceed the total amount paid and payable to us under the contract. Each separate transaction on the marketplace shall constitute a separate contract for the purpose of this section 13.4.</li>
              <li>Notwithstanding section 13.4 above, we will not be liable to you for any loss or damage of any nature, including in respect of:</li>
                <ul>
                  <li>any losses occasioned by any interruption or dysfunction to the website;</li>
                  <li>any losses arising out of any event or events beyond our reasonable control;</li>
                  <li>any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill;</li>
                  <li>any loss or corruption of any data, database or software; or</li>
                  <li>any special, indirect or consequential loss or damage.</li>
                </ul>
              <li>We accept that we have an interest in limiting the personal liability of our officers and employees and, having regard to that interest, you acknowledge that we are a limited liability entity; you agree that you will not bring any claim personally against our officers or employees in respect of any losses you suffer in connection with the marketplace or these general terms and conditions (this will not limit or exclude the liability of the limited liability entity itself for the acts and omissions of our officers and employees).</li>
              <li>Our marketplace includes hyperlinks to other websites owned and operated by third parties; such hyperlinks are not recommendations. We have no control over third party websites and their contents, and we accept no responsibility for them or for any loss or damage that may arise from your use of them.</li>
            </ul>
            <h5>14. Indemnification</h5>
            <ul>
              <li>You hereby indemnify us, and undertake to keep us indemnified, against:</li>
                <ul>
                  <li>any and all losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by us to any third party in settlement of a claim or dispute) incurred or suffered by us and arising directly or indirectly out of your use of our marketplace or any breach by you of any provision of these general terms and conditions or the MZ Online Market codes, policies or guidelines; and</li>
                  <li>any VAT liability or other tax liability that we may incur in relation to any sale, supply or purchase made through our marketplace, where that liability arises out of your failure to pay, withhold, declare or register to pay any VAT or other tax properly due in any jurisdiction.</li>
                </ul>
            </ul>

            <h5>15. Breaches of these general terms and conditions</h5>
            <ul>
              <li>If we permit the registration of an account on our marketplace it will remain open indefinitely, subject to these general terms and conditions.</li>
              <li>If you breach these general terms and conditions, or if we reasonably suspect that you have breached these general terms and conditions or any MZ Online Market codes, policies or guidelines in any way we may:</li>
                <ul>
                  <li>temporarily suspend your access to our marketplace;</li>
                  <li>permanently prohibit you from accessing our marketplace;</li>
                  <li>block computers using your IP address from accessing our marketplace;</li>
                  <li>contact any or all of your internet service providers and request that they block your access to our marketplace;</li>
                  <li>suspend or delete your account on our marketplace; and/or</li>
                  <li>commence legal action against you, whether for breach of contract or otherwise.</li>
                </ul>
              <li>Where we suspend, prohibit or block your access to our marketplace or a part of our marketplace you must not take any action to circumvent such suspension or prohibition or blocking (including without limitation creating and/or using a different account).</li>
            </ul>

            <h5>16. Entire Agreement</h5>
            <p>These general terms and conditions and the MZ Online Market codes, policies and guidelines (and in respect of sellers the seller terms and conditions) shall constitute the entire agreement between you and us in relation to your use of our marketplace and shall supersede all previous agreements between you and us in relation to your use of our marketplace.</p>

            <h5>17. Hierarchy</h5>
            <p>Should these general terms and conditions, the seller terms and conditions, and the MZ Online Market codes, policies and guidelines be in conflict, these terms and conditions, the seller terms and conditions and the MZ Online Market codes, policies and guidelines shall prevail in the order here stated.</p>

            <h5>18. Variation</h5>
            <ul>
              <li>We may revise these general terms and conditions, the seller terms and conditions, and the MZ Online Market codes, policies and guidelines from time to time.</li>
              <li>The revised general terms and conditions shall apply from the date of publication on the marketplace.</li>
            </ul>

            <h5>19. Severability</h5>
            <ul>
              <li>If a provision of these general terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</li>
              <li>If any unlawful and/or unenforceable provision of these general terms and conditions would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</li>
            </ul>

            <h5>20. Assignment</h5>
            <ul>
              <li>You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these general terms and conditions.</li>
              <li>You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these general terms and conditions.</li>
            </ul>

            <h5>21. Third party rights</h5>
            <ul>
              <li>A contract under these general terms and conditions is for our benefit and your benefit, and is not intended to benefit or be enforceable by any third party.</li>
              <li>The exercise of the parties' rights under a contract under these general terms and conditions is not subject to the consent of any third party</li>
            </ul>

            <h5>22. Law and jurisdiction</h5>
            <ul>
              <li>These general terms and conditions shall be governed by and construed in accordance with the laws of the territory.</li>
              <li>Any disputes relating to these general terms and conditions shall be subject to the exclusive jurisdiction of the courts of the territory.</li>
            </ul>

            <h5>23. Our company details</h5>
            <p>The marketplace is operated by Super Seven Stars International Trading Company Limited. Our head office is at No.3, Yadanar Road, Mi Chaung Kan 3rd Quarter, Thingangyun Tsp, Yangon, Myanmar. You can contact us by using our marketplace contact form.</p>
            
          </TxtTitle>
        </Row>
      </Container>
    </Section>
  )
}