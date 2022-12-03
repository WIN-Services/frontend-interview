import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class WebPage extends StatefulWidget {
  const WebPage({Key? key}) : super(key: key);

  @override
  State<WebPage> createState() => _WebPageState();
}

class _WebPageState extends State<WebPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: LayoutBuilder(builder: (context, constraints) {
          return SingleChildScrollView(
            child: Column(
              children: [
                Column(
                  children: [
                    Container(
                      margin: EdgeInsets.only(
                          left: 100, right: 100, top: 50, bottom: 50),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.all(Radius.circular(12)),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 5,
                            blurRadius: 7,
                            offset: Offset(0, 3), // changes position of shadow
                          ),
                        ],
                      ),
                      child: Padding(
                        padding: EdgeInsets.all(12.w),
                        child: Row(
                          children: [
                            Container(
                              color: const Color(0xffEEEEEE),
                              width:
                                  MediaQuery.of(context).size.width / 3 - 100,
                              child: Padding(
                                padding: EdgeInsets.all(25.w),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Contact Us',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w800,
                                          fontSize: 28.sp,
                                          color: Colors.black),
                                    ),
                                    SizedBox(
                                      height: 20.h,
                                    ),
                                    Text(
                                      'Inspection',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w500,
                                          fontSize: 16.sp,
                                          color: Colors.black),
                                    ),
                                    SizedBox(
                                      height: 8.h,
                                    ),
                                    Text(
                                      '(800)309-6753 | info@wini.com',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w400,
                                          fontSize: 16.sp,
                                          color: Colors.black),
                                    ),
                                    SizedBox(
                                      height: 20.h,
                                    ),
                                    Text(
                                      'Franchising',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w500,
                                          fontSize: 16.sp,
                                          color: Colors.black),
                                    ),
                                    SizedBox(
                                      height: 8.h,
                                    ),
                                    Text(
                                      '(800)309-6753 | info@wini.com',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w400,
                                          fontSize: 16.sp,
                                          color: Colors.black),
                                    ),
                                    SizedBox(
                                      height: 20.h,
                                    ),
                                    Text(
                                      'Vendors',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w500,
                                          fontSize: 16.sp,
                                          color: Colors.black),
                                    ),
                                    SizedBox(
                                      height: 8.h,
                                    ),
                                    Text(
                                      '(800)309-6753 | info@wini.com',
                                      style: TextStyle(
                                          fontWeight: FontWeight.w400,
                                          fontSize: 16.sp,
                                          color: Colors.black),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            SizedBox(
                              width: 15.h,
                            ),
                            Container(
                              width: MediaQuery.of(context).size.width / 2,
                              child: Padding(
                                padding: EdgeInsets.all(8),
                                child: Column(
                                  children: [
                                    Row(
                                      children: [
                                        Column(
                                          children: [
                                            Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                Text(
                                                  'Name',
                                                  style: TextStyle(
                                                      fontSize: 18.sp),
                                                ),
                                                SizedBox(
                                                  height: 10.h,
                                                ),
                                                SizedBox(
                                                    width: 60.w,
                                                    child: getTextField(
                                                        hint: "Full Name"))
                                              ],
                                            )
                                          ],
                                        ),
                                        SizedBox(
                                          width: 20.w,
                                        ),
                                        Column(
                                          children: [
                                            Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                Text(
                                                  'Email',
                                                  style: TextStyle(
                                                      fontSize: 18.sp),
                                                ),
                                                SizedBox(
                                                  height: 10.h,
                                                ),
                                                SizedBox(
                                                    width: 60.w,
                                                    child: getTextField(
                                                        hint: "xyz@abcd.com"))
                                              ],
                                            )
                                          ],
                                        ),
                                      ],
                                    ),
                                    SizedBox(
                                      height: 20.h,
                                    ),
                                    Row(
                                      children: [
                                        Column(
                                          children: [
                                            Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                Text(
                                                  'Phone Number',
                                                  style: TextStyle(
                                                      fontSize: 18.sp),
                                                ),
                                                SizedBox(
                                                  height: 10.h,
                                                ),
                                                SizedBox(
                                                    width: 60.w,
                                                    child: getTextField(
                                                        hint: "(123)456-7890"))
                                              ],
                                            )
                                          ],
                                        ),
                                        SizedBox(
                                          width: 20.w,
                                        ),
                                        Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              'Zip Code',
                                              style: TextStyle(fontSize: 18.sp),
                                            ),
                                            SizedBox(
                                              height: 10.h,
                                            ),
                                            SizedBox(
                                                width: 60.w,
                                                child: getTextField(
                                                    hint: "xxxxxx")),
                                          ],
                                        ),
                                      ],
                                    ),
                                    SizedBox(
                                      height: 20.h,
                                    ),
                                    Row(
                                      children: [
                                        Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              'Message',
                                              style: TextStyle(fontSize: 18.sp),
                                            ),
                                            SizedBox(
                                              height: 10.h,
                                            ),
                                            SizedBox(
                                              width: 100.w,
                                              child: getTextField(
                                                  hint: "Please Type it here"),
                                            ),
                                            SizedBox(
                                              height: 20.h,
                                            ),
                                            ElevatedButton(
                                              style: ElevatedButton.styleFrom(
                                                backgroundColor:
                                                    Color(0xff005981),
                                                shape: RoundedRectangleBorder(
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          8.0.r),
                                                ),
                                              ),
                                              onPressed: () {},
                                              child: Text(
                                                  "SUBMIT".toUpperCase(),
                                                  style: TextStyle(
                                                      fontSize: 14.sp)),
                                            ),
                                          ],
                                        )
                                      ],
                                    )
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(
                          left: 100, right: 100, top: 0, bottom: 100),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.all(Radius.circular(12)),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 5,
                            blurRadius: 7,
                            offset: Offset(0, 3), // changes position of shadow
                          ),
                        ],
                      ),
                      child: Padding(
                        padding: EdgeInsets.all(20.r),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              'Subscribe to our mail',
                              style: TextStyle(
                                  fontWeight: FontWeight.w500,
                                  fontSize: 28.sp,
                                  color: Colors.black),
                            ),
                            SizedBox(
                              height: 15.h,
                            ),
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 20.w),
                              child: Text(
                                'Enter your email address to receive the latest notification, newsletters, and updates from WIN!',
                                style: TextStyle(
                                    fontWeight: FontWeight.w400,
                                    fontSize: 16.sp,
                                    color: Colors.black),
                              ),
                            ),
                            SizedBox(
                              height: 20.h,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                SizedBox(
                                    width: 120.w,
                                    child: getTextField(
                                        hint: "Your email address")),
                                SizedBox(
                                  width: 10.w,
                                ),
                                Container(
                                  width: 45.w,
                                  height: 40.h,
                                  decoration: BoxDecoration(
                                      color: Color(0xffD4A656),
                                      borderRadius: BorderRadius.circular(12)),
                                  child: Center(
                                      child: Text(
                                    'Subsribe'.toUpperCase(),
                                    style: TextStyle(
                                      fontSize: 20,
                                    ),
                                  )),
                                ),
                              ],
                            )
                          ],
                        ),
                      ),
                    )
                  ],
                )
              ],
            ),
          );
        }),
      ),
    );
  }

  Widget getTextField({required String hint}) {
    return TextField(
      decoration: InputDecoration(
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Colors.transparent, width: 0),
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Colors.black54, width: 0),
          ),
          contentPadding: EdgeInsets.symmetric(horizontal: 8.w, vertical: 14.h),
          hintText: hint,
          hintStyle: TextStyle(
            fontSize: 14.sp,
            fontWeight: FontWeight.w400,
          )),
    );
  }
}
