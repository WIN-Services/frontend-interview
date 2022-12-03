import 'package:contactus_flutter/utils.dart';
import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double baseWidth = 1440;
    double fem = MediaQuery.of(context).size.width / baseWidth;
    double ffem = fem * 0.97;
    return Material(
      child: Scaffold(
        body: SingleChildScrollView(
          child: Container(
            // contactus28ap (1:38)
            padding:
                EdgeInsets.fromLTRB(100 * fem, 104 * fem, 100 * fem, 113 * fem),
            width: double.infinity,
            decoration: BoxDecoration(
              color: Color(0xffffffff),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  // autogroupft9utbv (CaxCGVn7ePMFMRATuvfT9U)
                  margin:
                      EdgeInsets.fromLTRB(0 * fem, 0 * fem, 0 * fem, 61 * fem),
                  width: double.infinity,
                  height: 723 * fem,
                  child: Stack(
                    children: [
                      Positioned(
                        // getintouchYgU (1:39)
                        left: 463 * fem,
                        top: 119 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 271 * fem,
                            height: 70 * fem,
                            child: Text(
                              'Get in Touch',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 50 * ffem,
                                fontWeight: FontWeight.w700,
                                height: 1.4 * ffem / fem,
                                color: Color(0xffffffff),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // haveanyquestionsorcommentsletu (1:40)
                        left: 443 * fem,
                        top: 210 * fem,
                        child: Center(
                          child: Align(
                            child: SizedBox(
                              width: 355 * fem,
                              height: 29 * fem,
                              child: Text(
                                'Have any questions or comments? Let us know!',
                                textAlign: TextAlign.center,
                                style: SafeGoogleFont(
                                  'Axiforma',
                                  fontSize: 18 * ffem,
                                  fontWeight: FontWeight.w400,
                                  height: 1.6000000636 * ffem / fem,
                                  color: Color(0xffffffff),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle431kRA (1:41)
                        left: 0 * fem,
                        top: 0 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 1240 * fem,
                            height: 723 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20 * fem),
                                color: Color(0xffffffff),
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x05121141),
                                    offset: Offset(0 * fem, 98 * fem),
                                    blurRadius: 33 * fem,
                                  ),
                                  BoxShadow(
                                    color: Color(0x0a14132a),
                                    offset: Offset(1 * fem, 4 * fem),
                                    blurRadius: 52 * fem,
                                  ),
                                  BoxShadow(
                                    color: Color(0x054a3aff),
                                    offset: Offset(0 * fem, 54 * fem),
                                    blurRadius: 27 * fem,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle2429LeG (1:42)
                        left: 21 * fem,
                        top: 18 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 458 * fem,
                            height: 688 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20 * fem),
                                color: Color(0xfff9f9f9),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle433QPE (1:43)
                        left: 840 * fem,
                        top: 108.6518554688 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 271 * fem,
                            height: 66 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10 * fem),
                                border: Border.all(color: Color(0xffeff0f6)),
                                color: Color(0xffffffff),
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x11121141),
                                    offset: Offset(0 * fem, 2 * fem),
                                    blurRadius: 3 * fem,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // xyzabccomdmn (1:44)
                        left: 860.71875 * fem,
                        top: 130.2583007812 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 86 * fem,
                            height: 24 * fem,
                            child: Text(
                              'xyz@abc.com',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 15 * ffem,
                                fontWeight: FontWeight.w400,
                                height: 1.6 * ffem / fem,
                                color: Color(0xff6e6b8f),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // name5Nt (1:45)
                        left: 525 * fem,
                        top: 70.6518554688 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 45 * fem,
                            height: 29 * fem,
                            child: Text(
                              'Name',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 18 * ffem,
                                fontWeight: FontWeight.w500,
                                height: 1.6000000636 * ffem / fem,
                                color: Color(0xff000000),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // emailM5W (1:46)
                        left: 840 * fem,
                        top: 70.6518554688 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 43 * fem,
                            height: 29 * fem,
                            child: Text(
                              'Email',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 18 * ffem,
                                fontWeight: FontWeight.w500,
                                height: 1.6000000636 * ffem / fem,
                                color: Color(0xff000000),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle439pjn (1:47)
                        left: 525 * fem,
                        top: 394.4638671875 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 564 * fem,
                            height: 168 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10 * fem),
                                border: Border.all(color: Color(0xffeff0f6)),
                                color: Color(0xffffffff),
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x11121141),
                                    offset: Offset(0 * fem, 2 * fem),
                                    blurRadius: 3 * fem,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // pleasetypeitinhereFaC (1:48)
                        left: 550 * fem,
                        top: 422.8612060547 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 191 * fem,
                            height: 20 * fem,
                            child: Text(
                              'Please type it in here...',
                              style: SafeGoogleFont(
                                'DM Sans',
                                fontSize: 18 * ffem,
                                fontWeight: FontWeight.w500,
                                height: 1.1111111111 * ffem / fem,
                                color: Color(0xff6e6b8f),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // message76c (1:49)
                        left: 525 * fem,
                        top: 357 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 64 * fem,
                            height: 29 * fem,
                            child: Text(
                              'Message',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 18 * ffem,
                                fontWeight: FontWeight.w500,
                                height: 1.6000000636 * ffem / fem,
                                color: Color(0xff000000),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle435ZzC (1:50)
                        left: 525 * fem,
                        top: 256 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 295 * fem,
                            height: 66 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10 * fem),
                                border: Border.all(color: Color(0xffeff0f6)),
                                color: Color(0xffffffff),
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x11121141),
                                    offset: Offset(0 * fem, 2 * fem),
                                    blurRadius: 3 * fem,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle2466pfE (1:51)
                        left: 525 * fem,
                        top: 109 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 295 * fem,
                            height: 66 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10 * fem),
                                border: Border.all(color: Color(0xffeff0f6)),
                                color: Color(0xffffffff),
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x11121141),
                                    offset: Offset(0 * fem, 2 * fem),
                                    blurRadius: 3 * fem,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // rectangle4364Za (1:52)
                        left: 840 * fem,
                        top: 255.6376953125 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 271 * fem,
                            height: 66 * fem,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10 * fem),
                                border: Border.all(color: Color(0xffeff0f6)),
                                color: Color(0xffffffff),
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x11121141),
                                    offset: Offset(0 * fem, 2 * fem),
                                    blurRadius: 3 * fem,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // KkQ (1:53)
                        left: 550.71875 * fem,
                        top: 277.244140625 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 92 * fem,
                            height: 24 * fem,
                            child: Text(
                              '(123) 456-7890',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 15 * ffem,
                                fontWeight: FontWeight.w400,
                                height: 1.6 * ffem / fem,
                                color: Color(0xff6e6b8f),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // fullnameQG4 (1:54)
                        left: 550.71875 * fem,
                        top: 130.244140625 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 200 * fem,
                            height: 24 * fem,
                            child: TextField(
                              decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                hintText: 'Enter a search term',
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // phonenumberTVE (1:55)
                        left: 525 * fem,
                        top: 218.6518554688 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 114 * fem,
                            height: 29 * fem,
                            child: Text(
                              'Phone Number',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 18 * ffem,
                                fontWeight: FontWeight.w500,
                                height: 1.6000000636 * ffem / fem,
                                color: Color(0xff000000),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // xxxxx8LU (1:56)
                        left: 860.71875 * fem,
                        top: 277.244140625 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 39 * fem,
                            height: 24 * fem,
                            child: Text(
                              'XXXXX',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 15 * ffem,
                                fontWeight: FontWeight.w400,
                                height: 1.6 * ffem / fem,
                                color: Color(0xff6e6b8f),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // zipcodeoBi (1:57)
                        left: 840 * fem,
                        top: 218.6518554688 * fem,
                        child: Align(
                          child: SizedBox(
                            width: 68 * fem,
                            height: 29 * fem,
                            child: Text(
                              'ZIP Code',
                              style: SafeGoogleFont(
                                'Axiforma',
                                fontSize: 18 * ffem,
                                fontWeight: FontWeight.w500,
                                height: 1.6000000636 * ffem / fem,
                                color: Color(0xff000000),
                              ),
                            ),
                          ),
                        ),
                      ),
                      Positioned(
                        // frame396345Q8 (1:58)
                        left: 52 * fem,
                        top: 39 * fem,
                        child: Container(
                          width: 196 * fem,
                          height: 284 * fem,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                // contactusAgU (1:59)
                                margin: EdgeInsets.fromLTRB(
                                    0 * fem, 0 * fem, 0 * fem, 32 * fem),
                                child: Text(
                                  'Contact Us',
                                  style: SafeGoogleFont(
                                    'Axiforma',
                                    fontSize: 25 * ffem,
                                    fontWeight: FontWeight.w800,
                                    height: 1.6 * ffem / fem,
                                    color: Color(0xff000000),
                                  ),
                                ),
                              ),
                              Container(
                                // frame39633EJx (1:60)
                                width: double.infinity,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    Container(
                                      // autogroupvfsxwjA (CaxDEPLf4JAJUSStN2VFsx)
                                      padding: EdgeInsets.fromLTRB(
                                          0 * fem, 0 * fem, 0 * fem, 16 * fem),
                                      width: double.infinity,
                                      child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Container(
                                            // frame39630dVW (1:61)
                                            margin: EdgeInsets.fromLTRB(0 * fem,
                                                0 * fem, 0 * fem, 16 * fem),
                                            child: Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                Container(
                                                  // inspectionsevQ (1:62)
                                                  margin: EdgeInsets.fromLTRB(
                                                      0 * fem,
                                                      0 * fem,
                                                      0 * fem,
                                                      7 * fem),
                                                  child: Text(
                                                    'Inspections',
                                                    style: SafeGoogleFont(
                                                      'Axiforma',
                                                      fontSize: 18 * ffem,
                                                      fontWeight:
                                                          FontWeight.w600,
                                                      height: 1.6000000636 *
                                                          ffem /
                                                          fem,
                                                      color: Color(0xff1d2b4f),
                                                    ),
                                                  ),
                                                ),
                                                Text(
                                                  // infowinicomTcx (1:63)
                                                  '(800) 309-6753 | info@wini.com ',
                                                  style: SafeGoogleFont(
                                                    'Rubik',
                                                    fontSize: 12 * ffem,
                                                    fontWeight: FontWeight.w400,
                                                    height: 2 * ffem / fem,
                                                    color: Color(0xff000000),
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                          Container(
                                            // frame39631jKa (1:64)
                                            child: Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                Container(
                                                  // franchisingRCQ (1:65)
                                                  margin: EdgeInsets.fromLTRB(
                                                      0 * fem,
                                                      0 * fem,
                                                      0 * fem,
                                                      7 * fem),
                                                  child: Text(
                                                    'Franchising',
                                                    style: SafeGoogleFont(
                                                      'Axiforma',
                                                      fontSize: 18 * ffem,
                                                      fontWeight:
                                                          FontWeight.w600,
                                                      height: 1.6000000636 *
                                                          ffem /
                                                          fem,
                                                      color: Color(0xff1d2b4f),
                                                    ),
                                                  ),
                                                ),
                                                Text(
                                                  // infowinicomSdJ (1:66)
                                                  '(800) 309-6753 | info@wini.com ',
                                                  style: SafeGoogleFont(
                                                    'Rubik',
                                                    fontSize: 12 * ffem,
                                                    fontWeight: FontWeight.w400,
                                                    height: 2 * ffem / fem,
                                                    color: Color(0xff000000),
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Container(
                                      // frame39632KBJ (1:67)
                                      width: double.infinity,
                                      child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Container(
                                            // vendorsasv (1:68)
                                            margin: EdgeInsets.fromLTRB(0 * fem,
                                                0 * fem, 0 * fem, 7 * fem),
                                            child: Text(
                                              'Vendors',
                                              style: SafeGoogleFont(
                                                'Axiforma',
                                                fontSize: 18 * ffem,
                                                fontWeight: FontWeight.w600,
                                                height:
                                                    1.6000000636 * ffem / fem,
                                                color: Color(0xff1d2b4f),
                                              ),
                                            ),
                                          ),
                                          Text(
                                            // vendorswinicomDR6 (1:69)
                                            '(312) 557-9319 | vendors@wini.com',
                                            style: SafeGoogleFont(
                                              'Rubik',
                                              fontSize: 12 * ffem,
                                              fontWeight: FontWeight.w400,
                                              height: 2 * ffem / fem,
                                              color: Color(0xff000000),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      Positioned(
                        // exploreallservicesgZa (1:80)
                        left: 525 * fem,
                        top: 593 * fem,
                        child: TextButton(
                          onPressed: () {},
                          style: TextButton.styleFrom(
                            padding: EdgeInsets.zero,
                          ),
                          child: Container(
                            width: 129 * fem,
                            height: 58 * fem,
                            decoration: BoxDecoration(
                              color: Color(0xff005981),
                              borderRadius: BorderRadius.circular(10 * fem),
                            ),
                            child: Center(
                              child: Text(
                                'SUBMIT ',
                                textAlign: TextAlign.center,
                                style: SafeGoogleFont(
                                  'Axiforma',
                                  fontSize: 16 * ffem,
                                  fontWeight: FontWeight.w700,
                                  height: 1.6000000238 * ffem / fem,
                                  letterSpacing: 0.4600000083 * fem,
                                  color: Color(0xffffffff),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // frame39581SSG (1:70)
                  margin:
                      EdgeInsets.fromLTRB(0 * fem, 0 * fem, 6 * fem, 0 * fem),
                  padding: EdgeInsets.fromLTRB(
                      259.5 * fem, 52 * fem, 259.5 * fem, 52 * fem),
                  width: 1232 * fem,
                  height: 309 * fem,
                  decoration: BoxDecoration(
                    color: Color(0xffeeeeee),
                    borderRadius: BorderRadius.circular(12 * fem),
                  ),
                  child: Container(
                    // frame39580uqe (1:71)
                    width: double.infinity,
                    height: double.infinity,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Container(
                          // frame39579E7E (1:72)
                          margin: EdgeInsets.fromLTRB(
                              0 * fem, 0 * fem, 0 * fem, 42 * fem),
                          width: double.infinity,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Center(
                                // subscribetoouremails9EC (1:73)
                                child: Container(
                                  margin: EdgeInsets.fromLTRB(
                                      0 * fem, 0 * fem, 0 * fem, 16 * fem),
                                  child: Text(
                                    'Subscribe to our emails ',
                                    textAlign: TextAlign.center,
                                    style: SafeGoogleFont(
                                      'Axiforma',
                                      fontSize: 36 * ffem,
                                      fontWeight: FontWeight.w700,
                                      height: 1.6000000636 * ffem / fem,
                                      color: Color(0xff000000),
                                    ),
                                  ),
                                ),
                              ),
                              Center(
                                // enteryouremailaddresstoreceive (1:74)
                                child: Text(
                                  'Enter your email address to receive the latest notifications, newsletters, and updates from WIN! ',
                                  textAlign: TextAlign.center,
                                  style: SafeGoogleFont(
                                    'Axiforma',
                                    fontSize: 18 * ffem,
                                    fontWeight: FontWeight.w400,
                                    height: 1.6000000636 * ffem / fem,
                                    color: Color(0xff000000),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          // group356985n4 (1:75)
                          margin: EdgeInsets.fromLTRB(
                              54.5 * fem, 0 * fem, 54.5 * fem, 0 * fem),
                          width: double.infinity,
                          height: 60 * fem,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10 * fem),
                          ),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Container(
                                // group275mPz (1:76)
                                margin: EdgeInsets.fromLTRB(
                                    0 * fem, 2 * fem, 25 * fem, 2 * fem),
                                padding: EdgeInsets.fromLTRB(
                                    32 * fem, 12 * fem, 32 * fem, 12 * fem),
                                width: 370 * fem,
                                height: double.infinity,
                                decoration: BoxDecoration(
                                  border: Border.all(color: Color(0xffffffff)),
                                  color: Color(0xffffffff),
                                  borderRadius: BorderRadius.circular(10 * fem),
                                ),
                                child: Center(
                                  child: Text(
                                    'Your email address',
                                    textAlign: TextAlign.center,
                                    style: SafeGoogleFont(
                                      'Open Sans',
                                      fontSize: 20 * ffem,
                                      fontWeight: FontWeight.w400,
                                      height: 1.6 * ffem / fem,
                                      color: Color(0xff000000),
                                    ),
                                  ),
                                ),
                              ),
                              Container(
                                // buttonsmHW (1:79)
                                width: 209 * fem,
                                height: double.infinity,
                                decoration: BoxDecoration(
                                  border: Border.all(color: Color(0xffd4a656)),
                                  color: Color(0xffd4a656),
                                  borderRadius: BorderRadius.circular(10 * fem),
                                ),
                                child: Center(
                                  child: Center(
                                    child: Text(
                                      'Subscribe',
                                      textAlign: TextAlign.center,
                                      style: SafeGoogleFont(
                                        'Open Sans',
                                        fontSize: 20 * ffem,
                                        fontWeight: FontWeight.w700,
                                        height: 1.4 * ffem / fem,
                                        color: Color(0xffffffff),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
