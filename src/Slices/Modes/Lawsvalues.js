import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
      summary:
        "An Act to provide for, as a good governance, efficient, transparent, and targeted delivery of subsidies, benefits and services, the expenditure for which is incurred from the Consolidated Fund of India, 1[or the Consolidated Fund of the State] to individuals residing in India through assigning of unique identity numbers to such individuals and for matters connected therewith or incidental thereto be it enacted by Parliament in the Sixty-seventh Year of the Republic of India as follows.",
      Chapters: [
        {
          name: "1. Preliminary",
          sections: [
            {
              name: "1. Short title, extent and commencement",
              details: [
                "1. This Act may be called the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016.",
                "2. It shall extend to the whole of India 2*** and save as otherwise provided in this Act, it shall also apply to any offence or contravention thereunder committed outside India by any person.",
                "3. It shall come into force on such date3 as the Central Government may, by notification in the Official Gazette, appoint; and different dates may, be appointed for different provisions of this Act and any reference in any such provision to the commencement of this Act shall be construed as a reference to the commencement of that provision.",
              ],
            },
            {
              name: "2.	Definitions",
              details: [
                {
                  name: "In this Act, unless the context otherwise requires,",
                  details: [
                    "⁴[(a) 'Aadhaar number' means an identification number issued to an individual under sub-section (3) of section 3, and includes any alternative virtual identity generated under sub-section (4) of that section;]",
                    "⁵[(aa) 'Aadhaar ecosystem' includes enrolling agencies, Registrars, requesting entities, offline verification-seeking entities and any other entity or group of entities as may be specified by regulations;]",
                    "(b) ' Aadhaar number holder' means an individual who has been issued an Aadhaar number under this Act;",
                    "⁴(ba) 'Adjudicating Officer' means an Adjudicating Officer appointed under sub-section (1) of section 33B",
                    "(bb) 'Appellate Tribunal' means the Appellate Tribunal referred to in sub-section (1) of section 33C;",
                    "(c) 'authentication' means the process by which the Aadhaar number alongwith demographic information or biometric information of an individual is submitted to the Central Identities Data Repository for its verification and such Repository verifies the correctness, or the lack thereof, on the basis of information available with it;",
                    "(d) 'authentication record' means the record of the time of authentication and identity of the requesting entity and the response provided by the Authority thereto",
                    "(e) 'Authority' means the Unique Identification Authority of India established under sub-section (1) of section 11;",
                    "(f) 'benefit ' means any advantage, gift, reward, relief, or payment, in cash or kind, provided to an individual or a group of individuals and includes such other benefits as may be notified by the Central Government;",
                    "(g) 'biometric information' means photograph, finger print, Iris scan, or such other biological attributes of an individual as may be specified by regulations;",
                    {
                      name: "(h) 'Central Identities Data Repository' means a centralised database in one or more locations containing all Aadhaar numbers issued to Aadhaar number holders along with the corresponding demographic information and biometric information of such individuals and other information related thereto;",
                      details: [
                        "(i) 'Chairperson' means the Chairperson of the Authority appointed under section 12; ",
                        "1[(ia) 'child' means a person who has not completed eighteen years of age;]",
                      ],
                    },
                    "(j) 'core biometric information' means finger print, Iris scan, or such other biological attribute of an individual as may be specified by regulations;",
                    "(k) 'demographic information' includes information relating to the name, date of birth, address and other relevant information of an individual, as may be specified by regulations for the purpose of issuing an Aadhaar number, but shall not include race, religion, caste, tribe, ethnicity, language, records of entitlement, income or medical history;",
                    "(l) 'enrolling agency' means an agency appointed by the Authority or a Registrar, as the case may be, for collecting demographic and biometric information of individuals under this Act;",
                    "(m) 'enrolment' means the process, as may be specified by regulations, to collect demographic and biometric information from individuals by the enrolling agencies for the purpose of issuing Aadhaar numbers to such individuals under this Act;",
                    "(n) 'identity information' in respect of an individual, includes his Aadhaar number, his biometric information and his demographic information;",
                    "(o) 'Member' includes the Chairperson and Member of the Authority appointed under section 12;",
                    {
                      name: "(p) 'notification' means a notification published in the Official Gazette and the expression 'notified' with its cognate meanings and grammatical variations shall be construed accordingly; ",
                      details: [
                        "1[(pa) 'offline verification' means the process of verifying the identity of the Aadhaar number holder without authentication, through such offline modes as may be specified by regulations; ",
                        "(pb) 'offline verification-seeking entity' means any entity desirous of undertaking offline verification of an Aadhaar number holder;]",
                      ],
                    },
                    "(r) 'records of entitlement' means records of benefits, subsidies or services provided to, or availed by, any individual under any programme;",
                    "(s) 'Registrar' means any entity authorised or recognised by the Authority for the purpose of enrolling individuals under this Act;",
                    "(u) 'requesting entity' means an agency or person that submits the Aadhaar number, and demographic information or biometric information, of an individual to the Central Identities Data Repository for authentication",
                    "(v) 'resident' means an individual who has resided in India for a period or periods amounting in all to one hundred and eighty-two days or more in the twelve months immediately preceding the date of application for enrolment;",
                    "(w) 'service' means any provision, facility, utility or any other assistance provided in any form to an individual or a group of individuals and includes such other services as may be notified by the Central Government;",
                    "(x) 'subsidy' means any form of aid, support, grant, subvention, or appropriation, in cash or kind, to an individual or a group of individuals and includes such other subsidies as may be notified by the Central Government.",
                    "",
                    "",
                    "1. Ins. by Act 14 of 2019, s. 3 (w.e.f. 25-7-2019).",
                    "2. The words except the State of 'Jammu and Kashmir' omitted by Act 34 of 2019, s. 95 and the Fifth Schedule (w.e.f. 31-10- 2019)",
                    "3. 12th September, 2016 - Sections 1 to 10, 24 to 47, vide notification No.S.O. 2927 (E), dated 12th September, 2016 see Gazette of India Extraordinary, Part II, s. 3 (ii).",
                    "12th July, 2016- Sections 11 to 20, 22 and 23, 48 to 59, vide notification No. S.O. 2357 (E), dated 12 the July 2016, see Gazette of India, Extraordinary, Part II, s. 3 (ii).",
                    "25th July, 2019 - Sections1 to 30, vide notification No. S.O. 2649 (E), dated 25th July, 2019 see Gazette of India, Extraordinary, Part II, s. 3 (ii).",
                    "4. Subs. by Act 14 of 2019, s, 3, for clause (a) (w.e.f. 25-7-2019).",
                    "5. Ins. by s. 3, ibid, (w.e.f. 25-7-2019).",
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "2. Enrolment",
          sections: [
            {
              name: "3. Aadhaar number",
              details: [
                "1. Every resident shall be entitled to obtain an Aadhaar number by submitting his demographic information and biometric information by undergoing the process of enrolment:",
                " Provided that the Central Government may, from time to time, notify such other category of individuals who may be entitled to obtain an Aadhaar number",
                {
                  name: "2. The enrolling agency shall, at the time of enrolment, inform the individual undergoing enrolment of the following details in such manner as may be specified by regulations, namely the manner in which the information shall be used",
                  details: [
                    "(a) the manner in which the information shall be used;",
                    "(b) the nature of recipients with whom the information is intended to be shared during authentication; and",
                    "(c) the existence of a right to access information, the procedure for making requests for such access, and details of the person or department in-charge to whom such requests can be made.",
                  ],
                },
                "3.On receipt of the demographic information and biometric information under sub-section (1), the Authority shall, after verifying the information, in such manner as may be specified by regulations, issue an Aadhaar number to such individual",
                "¹[4. The Aadhaar number issued to an individual under sub-section (3) shall be a twelve-digit identification number and any alternative virtual identity as an alternative to the actual Aadhaar number of an individual that shall be generated by the Authority in such manner as may be specified by regulations.]",
                "",
                "",
                "1. Ins. by Act 14 of 2019, s. 4 (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "3A. Aadhaar number of children",
              details: [
                "²[3A. Aadhaar number of children. The enrolling agency shall, at the time of enrolment of a child, seek the consent of the parent or guardian of the child, and inform the parent or guardian, the details specified under sub-section (2) of section 3.",
                "A child who is an Aadhaar number holder may, within a period of six months of attaining the eighteen years of age, make an application to the Authority for cancellation of his Aadhaar number, in such manner as may be specified by regulations and the Authority shall cancel his Aadhaar number",
                "Notwithstanding anything in section 7, a child shall not be denied any subsidy, benefit or service under that section in case of failure to establish his identity by undergoing authentication, or furnishing proof of possession of Aadhaar number, or in the case of a child to whom no Aadhaar number has been assigned, producing an application for enrolment.]",
                "",
                "",
                "2. Ins. by s. 5, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "4. Properties of Aadhaar number",
              details: [
                "1. An Aadhaar number, issued to an individual shall not be re-assigned to any other individual.",
                "2. An Aadhaar number shall be a random number and bear no relation to the attributes or identity of the Aadhaar number holder",
                "3.Every Aadhaar number holder to establish his identity, may voluntarily use his Aadhaar number in physical or electronic form by way of authentication or offline verification, or in such other form as may be notified, in such manner as may be specified by regulations",
                "  Explanation. For the purposes of this section, voluntary use of the Aadhaar number by way of authentication means the use of such Aadhaar number only with the informed consent of the Aadhaar number holder.",
                {
                  name: "4. An entity may be allowed to perform authentication, if the Authority is satisfied that the requesting entity is",
                  details: [
                    "(a) compliant with such standards of privacy and security as may be specified by regulations; and",
                    "(b) (i) permitted to offer authentication services under the provisions of any other law made by Parliament; or",
                    "(ii) seeking authentication for such purpose, as the Central Government in consultation with the Authority, and in the interest of State, may prescribe.",
                  ],
                },
                "5. The Authority may, by regulations, decide whether a requesting entity shall be permitted the use of the actual Aadhaar number during authentication or only an alternative virtual identity",
                "6. Every requesting entity to whom an authentication request is made by an Aadhaar number holder under sub-section (3) shall inform to the Aadhaar number holder of alternate and viable means of identification and shall not deny any service to him for refusing to, or being unable to, undergo authentication",
                "7. Notwithstanding anything contained in the foregoing provisions, mandatory authentication of an Aadhaar number holder for the provision of any service shall take place if such authentication is required by a law made by Parliament",
                "",
                "",
                "1.	Subs. by Act 14 of 2019, s. 6, for Sub-section (3) (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "5. Special measures for issuance of Aadhaar number to certain category of persons",
              details: [
                " Special measures for issuance of Aadhaar number to certain category of persons. The Authority shall take special measures to issue Aadhaar number to women, children, senior citizens, persons with disability, unskilled and unorganised workers, nomadic tribes or to such other persons who do not have any permanent dwelling house and such other categories of individuals as may be specified by regulations",
              ],
            },
            {
              name: "6. Update of certain information",
              details: [
                "Update of certain information. The Authority may require Aadhaar number holders to update their demographic information and biometric information, from time to time, in such manner as may be specified by regulations, so as to ensure continued accuracy of their information in the Central Identities Data Repository",
              ],
            },
          ],
        },
        {
          name: "3. Authentication",
          sections: [
            {
              name: "7. Proof of Aadhaar number necessary for receipt of certain subsidies, benefits and services, etc. ",
              details: [
                "Proof of Aadhaar number necessary for receipt of certain subsidies, benefits and services, etc. The Central Government or, as the case may be, the State Government may, for the purpose of establishing identity of an individual as a condition for receipt of a subsidy, benefit or service for which the expenditure is incurred from, or the receipt therefrom forms part of, the Consolidated Fund of India, ¹[or the Consolidated Fund of State] require that such individual undergo authentication, or furnish proof of possession of Aadhaar number or in the case of an individual to whom no Aadhaar number has been assigned, such individual makes an application for enrolment:",

                "Provided that if an Aadhaar number is not assigned to an individual, the individual shall be offered alternate and viable means of identification for delivery of the subsidy, benefit or service.",
                "",
                "",
                "1.	Ins. by Act 14 of 2019, s. 7 (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "8. Authentication of Aadhaar number. ",
              details: [
                "1.The Authority shall perform authentication of the Aadhaar number of an Aadhaar number holder submitted by any requesting entity, in relation to his biometric information or demographic information, subject to such conditions and on payment of such fees and in such manner as may be specified by regulations.",
                {
                  name: "2. A requesting entity shall",
                  details: [
                    "(a) unless otherwise provided in this Act, obtain the consent of an individual ²[or in the case of a child obtain the consent of his parent or guardian] before collecting his identity information for the purposes of authentication in such manner as may be specified by regulations; and",
                    "(b) ensure that the identity information of an individual is only used for submission to the Central Identities Data Repository for authentication.",
                    "²[Provided that the requesting entity shall, in case of failure to authenticate due to illness, injury or infirmity owing to old age or otherwise or any technical or other reasons, provide such alternate and viable means of identification of the individual, as may be specified by regulations.]",
                    "",
                  ],
                },
                {
                  name: "3. A requesting entity shall inform, in such manner as may be specified by regulations, the individual submitting his identity information for authentication ²[or in the case of a child, his parent or guardian], the following details with respect to authentication, namely:",
                  details: [
                    "(a) the nature of information that may be shared upon authentication;",
                    "(b) the uses to which the information received during authentication may be put by the requesting entity; and",
                    "(c) alternatives to submission of identity information to the requesting entity",
                  ],
                },
                "(4) The Authority shall respond to an authentication query with a positive, negative or any other appropriate response sharing such identity information excluding any core biometric information.",
                "",
                "",
                "2.	Ins. by s. 8, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "8A. Offline verification of Aadhaar number. ",
              details: [
                "'[8A. Offline verification of Aadhaar number. (1) Every offline verification of an Aadhaar number holder shall be performed in accordance with the provisions of this section.",
                {
                  name: "2. Every offline verification-seeking entity shall,",
                  details: [
                    "(a) before performing offline verification, obtain the consent of an individual, or in the case of a child, his parent or guardian, in such manner as may be specified by regulations; and",
                    "(b) ensure that the demographic information or any other information collected from the individual for offline verification is only used for the purpose of such verification.",
                  ],
                },
                {
                  name: "3. An offline verification-seeking entity shall inform the individual undergoing offline verification, or in the case of a child, his parent or guardian, the following details with respect to offline verification, in such manner as may be specified by regulations, namely:",
                  details: [
                    "(a) the nature of information that may be shared upon offline verification;",
                    "(b) the uses to which the information received during offline verification may be put by the offline verification-seeking entity; and",
                    "(c) alternatives to submission of information requested for, if any.",
                  ],
                },
                {
                  name: "4. No offline verification-seeking entity shall",
                  details: [
                    "(a) subject an Aadhaar number holder to authentication;",
                    "(b) collect, use, or store an Aadhaar number or biometric information of any individual for any purpose;",
                    "(c) take any action contrary to any obligation on it as may be specified by regulations.]",
                  ],
                },
                "",
                "",
                "3.	Ins. by s. 9, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "9. Aadhaar number not evidence of citizenship or domicile, etc",
              details: [
                "The Aadhaar number or the authentication thereof shall not, by itself, confer any right of, or be proof of, citizenship or domicile in respect of an Aadhaar number holder.",
              ],
            },
            {
              name: "10. Central Identities Data Repository",
              details: [
                "The Authority may engage one or more entities to establish and maintain the Central Identities Data Repository and to perform any other functions as may be specified by regulations.",
              ],
            },
          ],
        },
        {
          name: "4. Unique Identification Authorityof India",
          sections: [
            {
              name: "11.	Establishment of Authority",
              details: [
                "1. The Central Government shall, by notification, establish an Authority to be known as the Unique Identification Authority of India to be responsible for the processes of enrolment and authentication and perform such other functions assigned to it under this Act.",

                "2. The Authority shall be a body corporate by the name aforesaid, having perpetual succession and a common seal, with power, subject to the provisions of this Act, to acquire, hold and dispose of property, both movable and immovable, and to contract, and shall, by the said name, sue or be sued.",

                "3. The head office of the Authority shall be in New Delhi.",

                "4. The Authority may, with the prior approval of the Central Government, establish its offices at other places in India.",
              ],
            },
            {
              name: "12.	Composition of Authority. ",
              details: [
                "The Authority shall consist of a Chairperson, appointed on part-time or full-time basis, two part-time Members, and the chief executive officer who shall be Member-Secretary of the Authority, to be appointed by the Central Government",
              ],
            },
            {
              name: "13.	Qualifications for appointment of Chairperson and Members of Authority. ",
              details: [
                "The Chairperson and Members of the Authority shall be persons of ability and integrity having experience and knowledge of at least ten years in matters relating to technology, governance, law, development, economics, finance, management, public affairs or administration",
              ],
            },
            {
              name: "14. Term of office and other conditions of service of Chairperson and Members.",
              details: [
                "1. The Chairperson and the Members appointed under this Act shall hold office for a term of three years from the date on which they assume office and shall be eligible for re-appointment:",
                "2. The Chairperson and every Member shall, before entering office, make and subscribe to, an oath of office and of secrecy, in such form and in such manner and before such Authority as may be prescribed.",
                {
                  name: "3. Notwithstanding anything contained in sub-section (1), the Chairperson or Member may",
                  details: [
                    "(a) relinquish his office, by giving in writing to the Central Government, a notice of not less than thirty days; or",
                    "(b) be removed from his office in accordance with the provisions of section 15.",
                  ],
                },
                "4. The salaries and allowances payable to, and the other terms and conditions of service of, the Chairperson and allowances or remuneration payable to part-time Members shall be such as may be prescribed.",
              ],
            },
            {
              name: "15. Removal of Chairperson and Members.",

              details: [
                {
                  name: "1. The Central Government may remove from office, the Chairperson, or a Member, who",
                  details: [
                    "(a) is, or at any time has been adjudged as insolvent;",
                    "(b) has become physically or mentally incapable of acting as the Chairperson or, as the case may be, a Member;",
                    "(c) has been convicted of an offence which, in the opinion of the Central Government, involves moral turpitude;",
                    "(d) has acquired such financial or other interest as is likely to affect prejudicially his functions as the Chairperson or, as the case may be, a Member; or",
                    "(e) has, in the opinion of the Central Government, so abused his position as to render his continuance in office detrimental to the public interest.",
                  ],
                },
                "(2) The Chairperson or a Member shall not be removed under clause (b), clause (d) or clause (e) of sub-section (1) unless he has been given a reasonable opportunity of being heard.",
              ],
            },
            {
              name: "16. Restrictions on Chairperson or Members on employment after cessation of office.",
              details: [
                {
                  name: "The Chairperson or a Member on ceasing to hold office for any reason, shall not, without previous approval of the Central Government,",
                  details: [
                    "(a) accept any employment in, or be connected with the management of any organisation, company or any other entity which has been associated with any work done or contracted out by the Authority, whether directly or indirectly, during his tenure as Chairperson or Member, as the case may be, for a period of three years from the date on which he ceases to hold office:",
                    "Provided that nothing contained in this clause shall apply to any employment under the Central Government or a State Government or local authority or in any statutory authority or any corporation established by or under any Central, State or provincial Act or a Government Company, as defined in clause (45) of section 2 of the Companies Act, 2013 (18 of 2013);",
                    "(b) act, for or on behalf of any person or organisation in connection with any specific proceeding or transaction or negotiation or a case to which the Authority is a party and with respect to which the Chairperson or such Member had, before cessation of office, acted for or provided advice to, the Authority;",
                    "(c) give advice to any person using information which was obtained in his capacity as the Chairperson or a Member and being unavailable to or not being able to be made available to the public; or",
                    "(d) enter, for a period of three years from his last day in office, into a contract of service with, accept an appointment to a board of directors of, or accept an offer of employment with, an entity with which he had direct and significant official dealings during his term of office.",
                  ],
                },
              ],
            },
            {
              name: "17. Functions of Chairperson.",
              details: [
                "The Chairperson shall preside over the meetings of the Authority, and without prejudice to any provision of this Act, exercise and discharge such other powers and functions of the Authority as may be prescribed.",
              ],
            },
            {
              name: "18. Chief executive officer.",
              details: [
                "1. There shall be a chief executive officer of the Authority, not below the rank of Additional Secretary to the Government of India, to be appointed by the Central Government.",
                {
                  name: "2. The chief executive officer shall be the legal representative of the Authority and shall be responsible for",
                  details: [
                    "(a) the day-to-day administration of the Authority;",
                    "(b) implementing the work programmes and decisions adopted by the Authority;",
                    "(c) drawing up of proposal for the Authority's decisions and work programmes;",
                    "(d) the preparation of the statement of revenue and expenditure and the execution of the budget of the Authority; and",
                    "(e) performing such other functions, or exercising such other powers, as may be specified by regulations.",
                  ],
                },
                {
                  name: "3. Every year, the chief executive officer shall submit to the Authority for approval",
                  details: [
                    "(a) a general report covering all the activities of the Authority in the previous year;",
                    "(b) programmes of work;",
                    "(c) the annual accounts for the previous year; and",
                    "(d) the budget for the coming year.",
                  ],
                },
                "The chief executive officer shall have administrative control over the officers and other employees of the Authority.",
              ],
            },
            {
              name: "19. Meetings of Authority.",
              details: [
                "1. The Authority shall meet at such times and places and shall observe such rules of procedure in regard to the transaction of business at its meetings, including quorum at such meetings, as may be specified by regulations.",
                "2. The Chairperson, or, if for any reason, he is unable to attend a meeting of the Authority, the senior most Member shall preside over the meetings of the Authority",
                "3. All questions which come up before any meeting of the Authority shall be decided by a majority of votes by the Members present and voting and in the event of anequality of votes, the Chairperson or in his absence the presiding Member shall have a casting vote",
                "4. All decisions of the Authority shall be signed by the Chairperson or any other Member or the Member-Secretary authorised by the Authority in this behalf.",
                "5. If any Member, who is a director of a company and who as such director, has any direct or indirect pecuniary interest in any manner coming up for consideration at a meeting of the Authority, he shall, as soon as possible after relevant circumstances have come to his knowledge, disclose the nature of his interest at such meeting and such disclosure shall be recorded in the proceedings of the Authority, and the Member shall not take part in any deliberation or decision of the Authority with respect to that matter",
              ],
            },
            {
              name: "20. Vacancies, etc., not to invalidate proceedings of Authority.",
              details: [
                {
                  name: "No act or proceeding of the Authority shall be invalid merely by reason of",
                  details: [
                    "(a) any vacancy in, or any defect in the constitution of, the Authority;",
                    "(b) any defect in the appointment of a person as Chairperson or Member of the Authority; or ",
                    "(c) any irregularity in the procedure of the Authority not affecting the merits of the case.",
                  ],
                },
              ],
            },
            {
              name: "21. Officers and other employees of Authority.",
              details: [
                "¹[Officers and other employees of Authority. (1) The Authority shall appoint such officers and employees as may be required for the discharge of its functions under this Act.",
                "(2) The salaries and allowances payable to, and the other terms and conditions of service of, the officers and employees of the Authority shall be such as may be specified by regulations.]",
                "1. Subs. by Act 14 of 2019, s. 10, for section 21 (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "22. Transfer of assets, liabilities of Authority.",
              details: [
                {
                  name: "On and from the establishment of the Authority",
                  details: [
                    "(a) all the assets and liabilities of the Unique Identification Authority of India, established vide notification of the Government of India in the Planning Commission number A-43011/02/2009-Admin. I, dated the 28th January, 2009, shall stand transferred to, and vested in, the Authority.",
                    "Explanation. The assets of such Unique Identification Authority of India shall be deemed to include all rights and powers, and all properties, whether movable or immovable, including, in particular, cash balances, deposits and all other interests and rights in, or arising out of, such properties as may be in the possession of such Unique Identification Authority of India and all books of account and other documents relating to the same; and liabilities shall be deemed to include all debts, liabilities and obligations of whatever kind;",
                    "(b) without prejudice to the provisions of clause (a), all data and information collected during enrolment, all details of authentication performed, debts, obligations and liabilities incurred, all contracts entered into and all matters and things engaged to be done by, with or for such Unique Identification Authority of India immediately before that day, for or in connection with the purpose of the said Unique Identification Authority of India, shall be deemed to have been incurred, entered into or engaged to be done by, with or for, the Authority;",
                    "(c) all sums of money due to the said Unique Identification Authority of India immediately before that day shall be deemed to be due to the Authority; and",
                    "(d) all suits and other legal proceedings instituted or which could have been instituted by or against such Unique Identification Authority of India immediately before that day may be continued or may be instituted by or against the Authority.",
                  ],
                },
              ],
            },
            {
              name: "23. Powers and functions of Authority.",
              details: [
                "1. The Authority shall develop the policy, procedure and systems for issuing Aadhaar numbers to individuals and perform authentication thereof under this Act.",
                {
                  name: "2. Without prejudice to sub-section (1), the powers and functions of the Authority, inter alia, include",
                  details: [
                    "(a) specifying, by regulations, demographic information and biometric information required for enrolment and the processes for collection and verification thereof;",
                    "(b) collecting demographic information and biometric information from any individual seeking an Aadhaar number in such manner as may be specified by regulations;",
                    "(c) appointing of one or more entities to operate the Central Identities Data Repository; ",
                    "(d) generating and assigning Aadhaar numbers to individuals; ",
                    "(e) performing authentication of Aadhaar numbers;",
                    "(f) maintaining and updating the information of individuals in the Central Identities Data Repository in such manner as may be specified by regulations;",
                    "(g) omitting and deactivating of an Aadhaar number and information relating thereto in such manner as may be specified by regulations;",
                    "(h) specifying the manner of use of Aadhaar numbers for the purposes of providing or availing of various subsidies, benefits, services and other purposes for which Aadhaar numbers may be used;",
                    "(i) specifying, by regulations, the terms and conditions for appointment of Registrars, enrolling agencies and service providers and revocation of appointments thereof;",
                    "(j) establishing, operating and maintaining of the Central Identities Data Repository;",
                    "(k) sharing, in such manner as may be specified by regulations, the information of Aadhaar number holders, subject to the provisions of this Act;",
                    "(l) calling for information and records, conducting inspections, inquiries and audit of the operations for the purposes of this Act of the Central Identities Data Repository, Registrars, enrolling agencies and other agencies appointed under this Act;",
                    "(m) specifying, by regulations, various processes relating to data management, security protocols and other technology safeguards under this Act;",
                    "(n) specifying, by regulations, the conditions and procedures for issuance of new Aadhaar number to existing Aadhaar number holder;",
                    "(o) levying and collecting the fees or authorising the Registrars, enrolling agencies or other service providers to collect such fees for the services provided by them under this Act in such manner as may be specified by regulations;",
                    "(p) appointing such committees as may be necessary to assist the Authority in discharge of its functions for the purposes of this Act;",
                    "(q) promoting research and development for advancement in biometrics and related areas, including usage of Aadhaar numbers through appropriate mechanisms;",
                    "(r) evolving of, and specifying, by regulations, policies and practices for Registrars, enrolling agencies and other service providers;",
                    "(s) setting up facilitation centres and grievance redressal mechanism for redressal of grievances of individuals, Registrars, enrolling agencies and other service providers;",
                    "(t) such other powers and functions as may be prescribed.",
                  ],
                },
                {
                  name: "3. The Authority may,",
                  details: [
                    "(a) enter into Memorandum of Understanding or agreement, as the case may be, with the Central Government or State Governments or Union territories or other agencies for the purpose of performing any of the functions in relation to collecting, storing, securing or processing of information or delivery of Aadhaar numbers to individuals or performing authentication;",
                    "(b) by notification, appoint such number of Registrars, engage and authorise such agencies to collect, store, secure, process information or do authentication or perform such other functions in relation thereto, as may be necessary for the purposes of this Act.",
                  ],
                },
                "4. The Authority may engage such consultants, advisors and other persons as may be required for efficient discharge of its functions under this Act on such allowances or remuneration and terms and conditions as may be specified by contract.",
              ],
            },
            {
              name: "23A. Power of Authority to issue directions.",
              details: [
                "¹[23A. Power of Authority to issue directions. (1) The Authority may for the discharge of its functions under this Act, or any rules or regulations made there under, by order, issue such directions from time to time to any entity in the Aadhaar ecosystem, as it may consider necessary.",
                "(2) Every direction issued under sub-section (1) shall be complied with by the entity in the Aadhaar ecosystem to whom such direction is issued.]",

                "1. Ins. by Act 14 of 2019, s. 11 (w.e.f. 25-7-2019).",
              ],
            },
          ],
        },
        {
          name: "5. Grants, Accountsand Auditand Annual Report",
          sections: [
            {
              name: "24.	Grants by Central Government.",
              details: [
                "The Central Government may, after due appropriation made by Parliament by law in this behalf, make to the Authority, grants of such sums of money as the Central Government may think fit for being utilised for the purposes of this Act",
              ],
            },
            {
              name: "25. Fund.",
              details: [
                {
                  name: "¹[25. Fund. (1) There shall be constituted a Fund to be called the Unique Identification Authority of India Fund and there shall be credited thereto",
                  details: [
                    "(a) all grants, fees and charges received by the Authority under this Act; and",
                    "(b) all sums received by the Authority from such other sources as may be decided upon by the Central Government.",
                  ],
                },
                {
                  name: "2. The Fund shall be applied for meeting",
                  details: [
                    "(a) the salaries and allowances payable to the Chairperson and members and administrative expenses including the salaries, allowances and pension payable to or in respect of officers and other employees of the Authority; and",
                    "(b) the expenses on objects and for purposes authorised by this Act.]",
                  ],
                },
              ],
            },
            {
              name: "26. Accounts and audit.",
              details: [
                "1. The Authority shall maintain proper accounts and other relevant records and prepare an annual statement of accounts in such form as may be prescribed by the Central Government in consultation with the Comptroller and Auditor-General of India",
                "2. The accounts of the Authority shall be audited annually by the Comptroller and Auditor-General of India at such intervals as may be specified by him and any expenditure incurred in connection with such audit shall be payable by the Authority to the Comptroller and Auditor-General",
                "3. The Comptroller and Auditor-General of India and any person appointed by him in connection with the audit the accounts of the Authority under this Act shall have the same rights and privileges and authority in connection with such audit as the Comptroller and Auditor -General generally has in connection with the audit of Government accounts, and in particular, shall have the right to demand production of books, accounts, connected vouchers and other documents and papers, and to inspect any of the offices of the Authority",
                "4. The accounts of the Authority, as certified by the Comptroller and Auditor-General of India or any other person appointed by him in this behalf, together with the audit report thereon shall be forwarded annually to the Central Government by the Authority and the Central Government shall cause the audit report to be laid, as soon as may be after it is received, before each House of Parliament",
              ],
            },
            {
              name: "27. Returns and annual report, etc.",
              details: [
                "1. The Authority shall furnish to the Central Government at such time and in such form and manner as may be prescribed or as the Central Government may direct, such returns and statements and particulars in regard to any matter under the jurisdiction of the Authority, as the Central Government may from time to time require.",
                {
                  name: "2. The Authority shall prepare, once in every year, and in such form and manner and at such time as may be prescribed, an annual report giving",
                  details: [
                    "(a) a description of all the activities of the Authority for the previous years;",
                    "(b) the annual accounts for the previous year; and",
                    "(c) the programmes of work for coming year.",
                  ],
                },
                "(3) A copy of the report received under sub-section (2) shall be laid by the Central Government, as soon as may be after it is received, before each House of Parliament.",
              ],
            },
          ],
        },
        {
          name: "6. Protectionof Information",
          sections: [
            {
              name: "28. Security and confidentiality of information.",
              details: [
                "1. The Authority shall ensure the security of identity information and authentication records of individuals",
                "2. Subject to the provisions of this Act, the Authority shall ensure confidentiality of identity information and authentication records of individuals.",
                "3. The Authority shall take all necessary measures to ensure that the information in the possession or control of the Authority, including information stored in the Central Identities Data Repository, is secured and protected against access, use or disclosure not permitted under this Act or regulations made thereunder, and against accidental or intentional destruction, loss or damage",
                {
                  name: "4. Without prejudice to sub-sections (1) and (2), the Authority shall",
                  details: [
                    "(a) adopt and implement appropriate technical and organisational security measures;",
                    "(b) ensure that the agencies, consultants, advisors or other persons appointed or engaged for performing any function of the Authority under this Act, have in place appropriate technical and organisational security measures for the information; and",
                    "(c) ensure that the agreements or arrangements entered into with such agencies, consultants, advisors or other persons, impose obligations equivalent to those imposed on the Authority under this Act, and require such agencies, consultants, advisors and other persons to act only on instructions from the Authority.",
                  ],
                },
                "(5) Notwithstanding anything contained in any other law for the time being in force, and save as otherwise provided in this Act, the Authority or any of its officers or other employees or any agency that maintains the Central Identities Data Repository shall not, whether during his service or thereafter, reveal any information stored in the Central Identities Data Repository or authentication record to anyone:",
                "Provided that an Aadhaar number holder may request the Authority to provide access to his identity information excluding his core biometric information in such manner as may be specified by regulations.",
              ],
            },
            {
              name: "29. Restriction on sharing information.",
              details: [
                {
                  name: "1. No core biometric information, collected or created under this Act, shall be",
                  details: [
                    "(a) shared with anyone for any reason whatsoever; or",
                    "(b) used for any purpose other than generation of Aadhaar numbers and authentication under this Act.",
                  ],
                },
                "2. The identity information, other than core biometric information, collected or created under this Act may be shared only in accordance with the provisions of this Act and in such manner as may be specified by regulations.",
                {
                  name: "¹[(3) No identity information available with a requesting entity or offline verification-seeking entity shall be",
                  details: [
                    "(a) used for any purpose, other than the purposes informed in writing to the individual at the time of submitting any information for authentication or offline verification; or",
                    "(b) disclosed for any purpose, other than purposes informed in writing to the individual at the time of submitting any information for authentication or offline verification:",
                    "Provided that the purposes under clauses (a) and (b) shall be in clear and precise language understandable to the individual.]",
                  ],
                },
                "No Aadhaar number ¹[, demographic information or photograph] collected or created under this Act in respect of an Aadhaar number holder shall be published, displayed or posted publicly, except for the purposes as may be specified by regulations.",
                "1. Subs. by Act 14 of 2019, s. 13, for sub-section (3) (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "30. Biometric information deemed to be sensitive personal information.",
              details: [
                {
                  name: "The biometric information collected and stored in electronic form, in accordance with this Act and regulations made thereunder, shall be deemed to be 'electronic record' and 'sensitive personal data or information', and the provisions contained in the Information Technology Act, 2000 (21 of 2000) and the rules made thereunder shall apply to such information, in addition to, and to the extent not in derogation of the provisions of this Act.",
                  details: [
                    "Explanation.	For the purposes of this section, the expressions",
                    "(a) 'electronic form' shall have the same meaning as assigned to it in clause (r) of sub-section (1) of section 2 of the Information Technology Act, 2000 (21 of 2000);",
                    "(b) 'electronic record' shall have the same meaning as assigned to it in clause (t) of sub-section (1) of section 2 of the Information Technology Act, 2000 (21 of 2000);",
                    "(c) 'sensitive personal data or information' shall have the same meaning as assigned to it in clause (iii) of the Explanation to section 43A of the Information Technology Act, 2000 (21 of 2000).",
                  ],
                },
              ],
            },
            {
              name: "31. Alteration of demographic information or biometric information.",
              details: [
                "1. In case any demographic information of an Aadhaar number holder is found incorrect or changes subsequently, the Aadhaar number holder shall request the Authority to alter such demographic information in his record in the Central Identities Data Repository in such manner as may be specified by regulations",
                "2. In case any biometric information of Aadhaar number holder is lost or changes subsequently for any reason, the Aadhaar number holder shall request the Authority to make necessary alteration in his record in the Central Identities Data Repository in such manner as may be specified by regulations",
                "3. On receipt of any request under sub-section (1) or sub-section (2), the Authority may, if it is satisfied, make such alteration as may be required in the record relating to such Aadhaar number holder and intimate such alteration to the concerned Aadhaar number holder",
                "4. No identity information in the Central Identities Data Repository shall be altered except in the manner provided in this Act or regulations made in this behalf",
              ],
            },
            {
              name: "32. Access to own information and records of requests for authentication.",
              details: [
                "1. The Authority shall maintain authentication records in such manner and for such period as may be specified by regulations",
                "2. Every Aadhaar number holder shall be entitled to obtain his authentication record in such manner as may be specified by regulations",
                "3. The Authority shall not, either by itself or through any entity under its control, collect, keep or maintain any information about the purpose of authentication",
              ],
            },
            {
              name: "33. Disclosure of information in certain cases.",
              details: [
                "(1) Nothing contained in sub-section (2) or sub-section (5) of section 28 or sub-section (2) of section 29 shall apply in respect of any disclosure of information, including identity information or authentication records, made pursuant to an order of a court not inferior to that of a ²[Judge of a High Court]:",
                "Provided that no order by the court under this sub-section shall be made without giving an opportunity of hearing to the Authority '[and the concerned Aadhaar number holder]",
                "'[Provided further that the core biometric information shall not be disclosed under this sub-section.](2) Nothing contained in sub-section (2) or sub -section (5) of section 28 and clause (b) of sub-section (1), sub-section (2) or sub-section (3) of section 29 shall apply in respect of any disclosure of information, including identity information or authentication records, made in the interest of national security in pursuance of a direction of an officer not below the rank of ¹[Secretary] to the Government of India specially authorised in this behalf by an order of the Central Government: ",
                "Provided that every direction issued under this sub-section, shall be reviewed by an Oversight Committee consisting of the Cabinet Secretary and the Secretaries to the Government of India in the Department of Legal Affairs and the Department of Electronics and Information Technology, before it takes effect:",
                "Provided further that any direction issued under this sub-section shall be valid for a period of three months from the date of its issue, which may be extended for a further period of three months after the review by the Oversight Committee.",
                "1. Subs. by Act 14 of 2019, s. 13, for 'or core biometric information' (w.e.f. 25-7-2019).",
                "2. Subs. by s. 14, ibid., for 'District Judge' (w.e.f. 25-7-2019).",
                "3. Ins. by s. 14, ibid, (w.e.f. 25-7-2019).",
              ],
            },
          ],
        },
        {
          name: "²[6A. Civil Penalties",
          sections: [
            {
              name: "33A. Penalty for failure to comply with provisions of this Act, rules, regulations and directions.",
              details: [
                "(1) Where an entity in the Aadhaar ecosystem fails to comply with the provision of this Act, the rules or regulations made there under or directions issued by the Authority under section 23A, or fails to furnish any information, document, or return of report required by the Authority, such entity shall be liable to a civil penalty which may extend to one crore rupees for each contravention and in case of a continuing failure, with additional penalty which may extend to ten lakh rupees for every day during which the failure continues after the first contravention",
                "(2) The amount of any penalty imposed under this section, if not paid, may be recovered as if it were an arrear of land revenue",

                "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
                "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "33B. Power to adjudicate.",
              details: [
                "(1) For the purposes of adjudication under section 33A and imposing a penalty there under, the Authority shall appoint an officer of the Authority, who is not below the rank of a Joint Secretary to the Government of India and possessing such qualification and experience as may be prescribed, to be an Adjudicating Officer for holding an inquiry in such manner as may be prescribed.",
                "(2) No inquiry under sub-section (1) shall be initiated except by a complaint made by the Authority.",
                {
                  name: "(3) While holding an inquiry, the Adjudicating Officer shall",
                  details: [
                    "(a) provide the entity in the Aadhaar ecosystem against whom complaint is made, an opportunity of being heard;",
                    "(b) have the power to summon and enforce the attendance of any person acquainted with the facts and circumstances of the case to give evidence or to produce any document which, in the opinion of the Adjudicating Officer, may be useful for or relevant to the subject matter of the inquiry.",
                  ],
                },
                "(4) If the Adjudicating Officer, on such inquiry, is satisfied that the entity in the Aadhaar ecosystem has failed to comply with any provision of this Act or the rules or regulations made there under or directions issued by the Authority under section 23A, or has failed to furnish any information, document, or return of report required by the Authority, the Adjudicating Officer may, by order, impose such penalty under section 33A as he thinks fit.",

                "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
                "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "33C. Appeals to Appellate Tribunal.",
              details: [
                "(1) The Telecom Disputes Settlement and Appellate Tribunal established under section 14 of the Telecom Regulatory Authority of India Act, 1997 (24 of 1997), shall be Appellate Tribunal for the purposes of hearing appeals against the decision of the Adjudicating Officer under this Act",
                "(2) A person or entity in the Aadhaar ecosystem aggrieved by an order of the Adjudicating Officer under section 33B, may prefer an appeal to the Appellate Tribunal within a period of forty-five days from the date of receipt of the order appealed against, in such form and manner and accompanied with such fee as may be prescribed  Provided that the Appellate Tribunal may entertain an appeal after the expiry of the said period of forty-five days if it is satisfied that there was sufficient cause for not filing it within that period.",
                "(3) On receipt of an appeal under sub-section (2), the Appellate Tribunal may, after giving the parties to the appeal an opportunity of being heard, pass such orders thereon as it thinks fit, confirming, modifying or setting aside the order appealed against",
                "(4) The Appellate Tribunal shall send a copy of every order made by it to the parties to the appeal and to the Adjudicating Officer",
                "(5) Any appeal filed under sub-section (2) shall be dealt with by the Appellate Tribunal as expeditiously as possible and every endeavour shall be made by it to dispose of the appeal within six months from the date on which it is presented to it",
                "(6) The Appellate Tribunal may, for the purpose of deciding an appeal before it, call for the records relevant to disposing of such appeal and make such orders as it thinks fit",
                "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
                "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "33D. Procedure and powers of the Appellate Tribunal.",
              details: [
                "The provisions of sections 14-I to 14K (both inclusive), 16 and 17 of the Telecom Regulatory Authority of India Act, 1997 (24 of 1997) shall, mutatis mutandis, apply to the Appellate Tribunal in the discharge of its functions under this Act, as they apply to it in the discharge of its functions under that Act",
                "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
                "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "33E. Appeal to Supreme Court of India.",
              details: [
                "(1) Notwithstanding anything contained in the Code of Civil Procedure, 1908 (5 of 1908) or in any other law for the time being in force, an appeal shall lie against any order, not being an interlocutory order, of the Appellate Tribunal to the Supreme Court on any substantial question of law arising out of such order",
                "(2) No appeal shall lie against any decision or order made by the Appellate Tribunal which the parties have consented to",
                "(3) Every appeal under this section shall be preferred within a period of forty-five days from the date of the decision or order appealed against",
                " Provided that the Supreme Court may entertain an appeal after the expiry of the said period of forty-five days if it is satisfied that there was sufficient cause for not filing it within that period",
                "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
                "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "33F. Civil court not to have jurisdiction.",
              details: [
                " No civil court shall have jurisdiction to entertain any suit or proceeding in respect of any matter which an Adjudicating Officer appointed under this Act or the Appellate Tribunal is empowered, by or under this Act to determine, and no injunction shall be granted by any court or other authority in respect of any action taken or to be taken in pursuance of any power conferred by or under this Act",
                "1. Subs. by Act 14 of 2019, s. 14, for 'Joint Secretary' (w.e.f. 25-7-2019).",
                "2. Ins. by s. 15, ibid, (w.e.f. 25-7-2019).",
              ],
            },
          ],
        },
        {
          name: "7. Offencesand Penalties",
          sections: [
            {
              name: "34. Penalty for impersonation at time of enrolment.",
              details: [
                "Whoever impersonates or attempts to impersonate another person, whether dead or alive, real or imaginary, by providing any false demographic information or biometric information, shall be punishable with imprisonment for a term which may extend to three years or with a fine which may extend to ten thousand rupees or with both",
              ],
            },
            {
              name: "35. Penalty for impersonation of Aadhaar number holder by changing demographic information or biometric information.",
              details: [
                "Whoever, with the intention of causing harm or mischief to an Aadhaar number holder, or with the intention of appropriating the identity of an Aadhaar number holder changes or attempts to change any demographic information or biometric information of an Aadhaar number holder by impersonating or attempting to impersonate another person, dead or alive, real or imaginary, shall be punishable with imprisonment for a term which may extend to three years and shall also be liable to a fine which may extend to ten thousand rupees",
              ],
            },
            {
              name: "36. Penalty for impersonation.",
              details: [
                "Whoever, not being authorised to collect identity information under the provisions of this Act, by words, conduct or demeanour pretends that he is authorised to do so, shall be punishable with imprisonment for a term which may extend to three years or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both",
              ],
            },
            {
              name: "37. Penalty for disclosing identity information.",
              details: [
                "Whoever, intentionally discloses, transmits, copies or otherwise disseminates any identity information collected in the course of enrolment or authentication to any person not authorised under this Act or regulations made thereunder or in contravention of any agreement or arrangement entered into pursuant to the provisions of this Act, shall be punishable with imprisonment for a term which may extend to three years or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both",
              ],
            },
            {
              name: "38. Penalty for unauthorised access to the Central Identities Data Repository.",
              details: [
                {
                  name: "Whoever, not being authorised by the Authority, intentionally,",
                  details: [
                    "(a) accesses or secures access to the Central Identities Data Repository;",
                    "(b) downloads, copies or extracts any data from the Central Identities Data Repository or stored in any removable storage medium;",
                    "(c) introduces or causes to be introduced any virus or other computer contaminant in the Central Identities Data Repository;",
                    "(d) damages or causes to be damaged the data in the Central Identities Data Repository; ",
                    "(e) disrupts or causes disruption of the access to the Central Identities Data Repository;",
                    "(f) denies or causes a denial of access to any person who is authorised to access the Central Identities Data Repository;",
                    "(g) reveals any information in contravention of sub-section (5) of section 28, or shares, uses or displays information in contravention of section 29 or assists any person in any of the aforementioned acts;",
                    "(h) destroys, deletes or alters any information stored in any removable storage media or in the Central Identities Data Repository or diminishes its value or utility or affects it injuriously by any means; or",
                    "(i) steals, conceals, destroys or alters or causes any person to steal, conceal, destroy or alter any computer source code used by the Authority with an intention to cause damage,shall be punishable with imprisonment for a term which may extend to three years 1[ten years] and shall also be liable to a fine which shall not be less than ten lakh rupees.",
                    "Explanation. For the purposes of this section, the expressions 'computer contaminant', 'computer virus' and 'damage' shall have the meanings respectively assigned to them in the Explanation to section 43 of the Information Technology Act, 2000 (21 of 2000), and the expression 'computer source code' shall have the meaning assigned to it in the Explanation to section 65 of the said Act.",
                  ],
                },
                "1. Subs. by Act 14 of 2019, s. 16 for 'three years' (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "39. Penalty for tampering with data in Central Identities Data Repository.",
              details: [
                "Whoever, not being authorised by the Authority, uses or tampers with the data in the Central Identities Data Repository or in any removable storage medium with the intent of modifying information relating to Aadhaar number holder or discovering any information thereof, shall be punishable with imprisonment for a term which may extend to ²[ten years] and shall also be liable to a fine which may extend to ten thousand rupees",

                "2. Subs. by s. 17, ibid., (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "'[40. Penalty for unauthorised use by requesting entity or offline verification-seeking entity.",
              details: [
                {
                  name: "Whoever,",
                  details: [
                    "(a) being a requesting entity, uses the identity information of an individual in contravention of sub-section (2) of section 8; or",
                    "(b) being an offline verification-seeking entity, uses the identity information of an individual in contravention of sub-section (2) of section 8A, shall be punishable with imprisonment which may extend to three years or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both.]",

                    "3. Subs. by s. 18, for section 40 (w.e.f. 25-7-2019).",
                  ],
                },
              ],
            },
            {
              name: "41. Penalty for non-compliance with intimation requirements.",
              details: [
                "Whoever, being an enrolling agency or a requesting entity, fails to comply with the requirements of sub-section (2) of section 3 or sub-section (3) of section 8, shall be punishable with imprisonment which may extend to one year or with a fine which may extend to ten thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees or with both",
              ],
            },
            {
              name: "42. General penalty.",
              details: [
                "Whoever commits an offence under this Act or any rules or regulations made thereunder for which no specific penalty is provided elsewhere than this section, shall be punishable with imprisonment for a term which may extend to ⁴[three year] or with a fine which may extend to twenty-five thousand rupees or, in the case of a company, with a fine which may extend to one lakh rupees, or with both.",
                "4. Subs. by s. 19, for 'One year' (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "43. Offences by companies.",
              details: [
                " (1) Where an offence under this Act has been committed by a company, every person who at the time the offence was committed was in charge of, and was responsible to, the company for the conduct of the business of the company, as well as the company, shall be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly:",
                "Provided that nothing contained in this sub -section shall render any such person liable to any punishment provided in this Act if he proves that the offence was committed without his knowledge or that he had exercised all due diligence to prevent the commission of such offence.",
                {
                  name: "(2) Notwithstanding anything contained in sub-section (1), where any offence under this Act has been committed by a company and it is proved that the offence has been committed with the consent or connivance of, or is attributable to, any neglect on the part of any director, manager, secretary or other officer of the company, such director, manager, secretary or other officer shall also be deemed to be guilty of the offence and shall be liable to be proceeded against and punished accordingly.",
                  details: [
                    "Explanation.	For the purposes of this section",
                    "(a) 'company' means any body corporate and includes a firm or other association of individuals; and",
                    "(b) 'director', in relation to a firm, means a partner in the firm.",
                  ],
                },
              ],
            },
            {
              name: "44. Act to apply for offence or contravention committed outside India.",
              details: [
                "(1) Subject to the provisions of sub-section (2), the provisions of this Act shall apply also to any offence or contravention committed outside India by any person, irrespective of his nationality",
                "(2) For the purposes of sub-section (1), the provisions of this Act shall apply to any offence or contravention committed outside India by any person, if the act or conduct constituting the offence or contravention involves any data in the Central Identities Data Repository.",
              ],
            },
            {
              name: "45. Power to investigate offences.",
              details: [
                "Notwithstanding anything contained in the Code of Criminal Procedure, 1973 (2 of 1974), a police officer not below the rank of Inspector of Police shall investigate any offence under this Act",
              ],
            },
            {
              name: "46. Penalties not to interfere with other punishments.",
              details: [
                "No penalty imposed under this Act shall prevent the imposition of any other penalty or punishment under any other law for the time being in force",
              ],
            },
            {
              name: "47. Cognizance of offences.",
              details: [
                "(1) No court shall take cognizance of any offence punishable under this Act, save on a complaint made by the Authority or any officer or person authorised by it.",
                "¹[Provided that the court may, on a complaint made by an Aadhaar number holder or individual take cognizance of any offence punishable under section 34 or 35 or 36 or 37 or 40 or section 41.] ",
                "(2) No court inferior to that of a Chief Metropolitan Magistrate or a Chief Judicial Magistrate shall try any offence punishable under this Act.",
                "1.	Ins. by Act 14 of 2019, s. 21 (w.e.f. 25-7-2019).",
              ],
            },
          ],
        },
        {
          name: "8. Miscellaneous",
          sections: [
            {
              name: "48.	Power of Central Government to supersede Authority.",
              details: [
                {
                  name: "(1) If, at any time, the Central Government is of the opinion,",
                  details: [
                    "(a) that, on account of circumstances beyond the control of the Authority, it is unable to discharge the functions or perform the duties imposed on it by or under the provisions of this Act; or",
                    "(b) that the Authority has persistently defaulted in complying with any direction given by the Central Government under this Act or in the discharge of the functions or performance of the duties imposed on it by or under the provisions of this Act and as a result of such default the financial position of the Authority or the administration of the Authority has suffered; or",
                    "(c) that a public emergency exists, the Central Government may, by notification, supersede the Authority for such period, not exceeding six months, as may be specified in the notification and appoint a person or persons as the President may direct to exercise powers and discharge functions under this Act:",
                    "Provided that before issuing any such notification, the Central Government shall give a reasonable opportunity to the Authority to make representations against the proposed supersession and shall consider the representations, if any, of the Authority.",
                  ],
                },
                {
                  name: "(2) Upon the publication of a notification under sub-section (1), superseding the Authority,",
                  details: [
                    "(a) the Chairperson and other Members shall, as from the date of supersession, vacate their offices as such;",
                    "(b) all the powers, functions and duties which may, by or under the provisions of this Act, be exercised or discharged by or on behalf of the Authority shall, until the Authority is reconstituted under sub-section (3), be exercised and discharged by the person or persons referred to in sub-section (1); and",
                    "(c) all properties owned or controlled by the Authority shall, until the Authority is reconstituted under sub-section (3), vest in the Central Government.",
                  ],
                },
                "(3) On or before the expiration of the period of supersession specified in the notification issued under sub-section (1), the Central Government shall reconstitute the Authority by a fresh appointment of its Chairperson and other Members and in such case any person who had vacated his office under clause (a) of sub-section (2) shall not be deemed to be disqualified for reappointment.",
                "(4) The Central Government shall cause a copy of the notification issued under sub-section (1) and a full report of any action taken under this section and the circumstances leading to such action to be laid before each House of Parliament at the earliest.",
              ],
            },
            {
              name: "49.	Members, officers, etc., to be public servants.",
              details: [
                "The Chairperson, Members, officers and other employees of the Authority shall be deemed, while acting or purporting to act in pursuance of any of the provisions of this Act, to be public servants within the meaning of section 21 of the Indian Penal Code (45 of 1860).",
              ],
            },
            {
              name: "50.	Power of Central Government to issue directions.",
              details: [
                "(1) Without prejudice to the foregoing provisions of this Act, the Authority shall, in exercise of its powers or the performance of its functions under this Act be bound by such directions on questions of policy, as the Central Government may give, in writing to it, from time to time:",
                "Provided that the Authority shall, as far as practicable, be given an opportunity to express its views before any direction is given under this sub-section:",
                "Provided further that nothing in this section shall empower the Central Government to issue directions pertaining to technical or administrative matters undertaken by the Authority.",
                "(2) The decision of the Central Government, whether a question is one of policy or not, shall be final.",
              ],
            },
            {
              name: "¹[50A. Exemption from tax on income.",
              details: [
                "¹[50A. Exemption from tax on income. Notwithstanding anything contained in the Income-tax Act, 1961 (43 of 1961) or any other enactment for the time being in force relating to tax on income, profits or gains, the Authority shall not be liable to pay income-tax or any other tax in respect of its income, profits or gains.]",
                "1.	Ins. by Act 14 of 2019, s. 21 (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "51.	Delegation",
              details: [
                "The Authority may, by general or special order in writing, delegate to any ²[Member or officer] of the Authority or any other person, subject to such conditions, if any, as may be specified in the order, such of its powers and functions under this Act (except the power under section 54) as it may deem necessary. ",

                "2. Subs. by s. 22, ibid., for 'Member, officer'(w.e.f. 25-7-2019)",
              ],
            },
            {
              name: "52.	Protection of action taken in good faith.",
              details: [
                "No suit, prosecution or other legal proceeding shall lie against the Central Government or the Authority or the Chairperson or any Member or any officer, or other employees of the Authority for anything which is in good faith done or intended to be done under this Act or the rule or regulation made thereunder.",
              ],
            },
            {
              name: "53.	Power of Central Government to make rules.",
              details: [
                "(1) The Central Government may, by notification, make rules to carry out the provisions of this Act.",
                {
                  name: "(2) In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:",
                  details: [
                    "(a) the form and manner in which and the authority before whom the oath of office and of secrecy is to be subscribed by the Chairperson and Members under sub-section (2) of section 14;",
                    "'[(aa) the purpose for which the requesting entity may be allowed by the Authority to perform authentication under sub-clause (ii) of clause (b) of sub-section (4) of section 4;]",
                    "(b) the salary and allowances payable to, and other terms and conditions of service of, the Chairperson and the allowances or remuneration payable to Members of the Authority under sub-section (4) of section 14;",
                    "(c) the other powers and functions of the Chairperson of the Authority under section 17; ",
                    "(d) the other powers and functions of the Authority under clause (t) of sub-section (2) of section 23;",
                    "(e) the form of annual statement of accounts to be prepared by Authority under sub-section (1) of section 26;",
                    "(f) the form and the manner in which and the time within which returns and statements and particulars are to be furnished under sub-section (1) of section 27;",
                    "(g) the form and the manner and the time at which the Authority shall furnish annual report under sub-section (2) of section 27;",
                    "¹[(ga) the qualification and experience of, and the manner of appointment of, the Adjudicating Officer under sub-section (1) of section 33B;",
                    "(gb) the form, manner, and fee for an appeal to be filed under sub-section (2) of section 33C;]",
                    "(h) any other matter which is required to be, or may be, prescribed, or in respect of which provision is to be or may be made by rules.",
                  ],
                },
                "1. Ins. by Act 14 of 2019, s. 23 (w.e.f. 25-7-2019).",

                "3. Ins. by s. 23, ibid, (w.e.f. 25-7-2019).",
              ],
            },
            {
              name: "54.	Power of Authority to make regulations.",
              details: [
                "(1) The Authority may, by notification, make regulations consistent with this Act and the rules made thereunder, for carrying out the provisions of this Act.",
                {
                  name: "(2) In particular, and without prejudice to the generality of the foregoing power, such regulations may provide for all or any of the following matters, namely:",
                  details: [
                    "²[(a) the entities or group of entities in the Aadhaar ecosystem under clause (aa), the biometric information under clause (g) and the demographic information under clause (k), the process of collecting demographic information and biometric information from the individuals by enrolling agencies under clause (m), and the modes of offline verification of Aadhaar number holder under clause (pa) of section 2;]",
                    "(b) the manner of verifying the demographic information and biometric information for issue of Aadhaar number under sub-section (3) of section 3;",
                    "'[(ba) the manner of generating an alternative virtual identity under sub-section (4) of section 3;",
                    "(bb) the manner in which cancellation of an Aadhaar number may be carried out under sub-section (2) of section 3A;]",
                    "(c) the conditions for accepting an Aadhaar number as proof of identity of the Aadhaar number holder under sub-section (3) of section 4;",
                    "'[(ca) standards of privacy and security to be complied with by the requesting entities under sub-section (4) of section 4;",
                    "(cb) the classification of requesting entities under sub-section (5) of section 4;]",
                    "(d) the other categories of individuals under section 5 for whom the Authority shall take special measures for allotment of Aadhaar number;",
                    "(e) the manner of updating biometric information and demographic information under section 6;",
                    "(f) the procedure for authentication of the Aadhaar number under section 8;",
                    "¹[(fa) the alternate and viable means of identification of individual under the proviso to clause (b) of sub-section (2) of section 8;",
                    "(fb) the manner of obtaining consent under clause (a) of sub-section (2), the manner of providing information to the individual undergoing offline verification under sub-section (3), and the obligations of offline verification-seeking entities under clause (c) of sub-section (4) of section 8A;]",
                    "(g) the other functions to be performed by the Central Identities Data Repository under section 10;",
                    "(h) the time and places of meetings of the Authority and the procedure for transaction of business to be followed by it, including the quorum, under sub-section (1) of section 19;",
                    "(i) the salary and allowances payable to, and other terms and conditions of service of, the chief executive officer, officers and other employees of the Authority under sub-section (2) of section 21;",
                    "(j) the demographic information and biometric information under clause (a) and the manner of their collection under clause (b) of sub-section (2) of section 23;",
                    "(k) the manner of maintaining and updating the information of individuals in the Central Identities Data Repository under clause (f) of sub-section (2) of section 23;",
                    "(l) the manner of omitting and deactivating an Aadhaar number and information relating thereto under clause (g) of sub-section (2) of section 23;",
                    "(m) the manner of use of Aadhaar numbers for the purposes of providing or availing of various subsidies, benefits, services and other purposes for which Aadhaar numbers may be used under clause (h) of sub-section (2) of section 23;",
                    "(n) the terms and conditions for appointment of Registrars, enrolling agencies and other service providers and the revocation of appointments thereof under clause (i) of sub-section (2) of section 23;",
                    "(o) the manner of sharing information of Aadhaar number holder under clause (k) of sub-section (2) of section 23;",
                    "(p) various processes relating to data management, security protocol and other technology safeguards under clause (m) of sub-section (2) of section 23;",
                    "(q) the procedure for issuance of new Aadhaar number to existing Aadhaar number holder under clause (n) of sub-section (2) of section 23;",
                    "(r) manner of authorising Registrars, enrolling agencies or other service providers to collect such fees for services provided by them under clause (o) of sub-section (2) of section 23;",
                    "(s) policies and practices to be followed by the Registrar, enrolling agencies and other service providers under clause (r) of sub-section (2) of section 23;",
                    "(t) the manner of accessing the identity information by the Aadhaar number holder under the proviso to sub-section (5) of section 28;",
                    "(u) the manner of sharing the identity information, other than core biometric information, collected or created under this Act under sub-section (2) of section 29;",
                    "(v) the manner of alteration of demographic information under sub-section (1) and biometric information under sub-section (2) of section 31;",
                    "(w) the manner of and the time for maintaining the request for authentication and the response thereon under sub-section (1), and the manner of obtaining, by the Aadhaar number holder, the authentication records under sub-section (2) of section 32;",
                    "(x) any other matter which is required to be, or may be, specified, or in respect of which provision is to be or may be made by regulations.",
                  ],
                },
                "---------------------------------------------------",
                "1.	Ins. by Act 14 of 2019, s. 23 (w.e.f. 25-7-2019).",
                "2.	Subs. by s. 24, ibid., for clause (a) (w.e.f. 25-7-2019).",
                "3.	Ins. by s. 24, ibid, (w.e.f. 25-7-2019). ",
              ],
            },
            {
              name: "55.	Laying of rules and regulations before Parliament.",
              details: [
                "Every rule and every regulation made under this Act shall be laid, as soon as may be after it is made, before each House of Parliament, while it is in session, for a total period of thirty days which may be comprised in one session or in two or more successive sessions, and if, before the expiry of the session immediately following the session or the successive sessions aforesaid, both Houses agree in making any modification in the rule or regulation, or both the Houses agree that the rule or regulation should not be made, the rule or regulation shall thereafter have effect only in such modified form or be of no effect, as the case may be; so, however, that any such modification or annulment shall be without prejudice to the validity of anything previously done under that rule or regulation.",
              ],
            },
            {
              name: "56.	Application of other laws not barred.",
              details: [
                "The provisions of this Act shall be in addition to, and not in derogation of, any other law for the time being in force.",
              ],
            },
            {
              name: "57.	[Omitted].",
              details: [
                "57.	Act not to prevent use of Aadhaar number for other purposes under law. Omitted by the Aadhaar and Other Laws (Amendment) Act 2019 (Act 14 of 2019), s. 25 (w.e.f. 25-07-2019).",
              ],
            },
            {
              name: "58.	Power to remove difficulties.",
              details: [
                "(1) If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order, published in the Official Gazette, make such provisions not inconsistent with the provisions of this Act as may appear to be necessary for removing the difficulty:",
                "Provided that no such order shall be made under this section after the expiry of three years from the commencement of this Act.",
                "(2) Every order made under this section shall be laid, as soon as may be after it is made, before each House of Parliament.",
              ],
            },
            {
              name: "59.	Savings.",
              details: [
                "Anything done or any action taken by the Central Government under the Resolution of the Government of India, Planning Commission bearing notification number A-43011/02/2009-Admin. I, dated the 28th January, 2009, or by the Department of Electronics and Information Technology under the Cabinet Secretariat Notification bearing notification number S.O.2492 (E), dated the 12th September, 2015, as the case may be, shall be deemed to have been validly done or taken under this Act.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Action creators are generated for each case reducer function

export const LawSlice = createSlice({
  name: "Laws",
  initialState,
  reducers: {},
});

export default LawSlice.reducer;
