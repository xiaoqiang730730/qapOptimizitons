let baseRcServer = function(url, method, apiName) {
    return {
      server: "rc",
      url: "https://mwdsp.superboss.cc" + url
    };
  };
  
  let apiList = {
    A0: baseRcServer("/api/a0", "a0", "a0"),
    A1: baseRcServer("/api/a1", "a1", "a1"),
    A2: baseRcServer("/api/a2", "a2", "a2"),
    A3: baseRcServer("/api/a3", "a3", "a3"),
    A4: baseRcServer("/api/a4", "a4", "a4"),
    A5: baseRcServer("/api/a5", "a5", "a5"),
    A6: baseRcServer("/api/a6", "a6", "a6"),
    A7: baseRcServer("/api/a7", "a7", "a7"),
    A8: baseRcServer("/api/a8", "a8", "a8"),
    A9: baseRcServer("/api/a9", "a9", "a9"),
    A10: baseRcServer("/api/a10", "a10", "a10"),
    A11: baseRcServer("/api/a11", "a11", "a11"),
    A12: baseRcServer("/api/a12", "a12", "a12"),
    A13: baseRcServer("/api/a13", "a13", "a13"),
    A14: baseRcServer("/api/a14", "a14", "a14"),
    A15: baseRcServer("/api/a15", "a15", "a15"),
    A16: baseRcServer("/api/a16", "a16", "a16"),
    A17: baseRcServer("/api/a17", "a17", "a17"),
    A18: baseRcServer("/api/a18", "a18", "a18"),
    A19: baseRcServer("/api/a19", "a19", "a19"),
    A20: baseRcServer("/api/a20", "a20", "a20"),
    A21: baseRcServer("/api/a21", "a21", "a21"),
    A22: baseRcServer("/api/a22", "a22", "a22"),
    A23: baseRcServer("/api/a23", "a23", "a23"),
    A24: baseRcServer("/api/a24", "a24", "a24"),
    A25: baseRcServer("/api/a25", "a25", "a25"),
    A26: baseRcServer("/api/a26", "a26", "a26"),
    A27: baseRcServer("/api/a27", "a27", "a27"),
    A28: baseRcServer("/api/a28", "a28", "a28"),
    A29: baseRcServer("/api/a29", "a29", "a29"),
    A30: baseRcServer("/api/a30", "a30", "a30"),
    A31: baseRcServer("/api/a31", "a31", "a31"),
    A32: baseRcServer("/api/a32", "a32", "a32"),
    A33: baseRcServer("/api/a33", "a33", "a33"),
    A34: baseRcServer("/api/a34", "a34", "a34"),
    A35: baseRcServer("/api/a35", "a35", "a35"),
    A36: baseRcServer("/api/a36", "a36", "a36"),
    A37: baseRcServer("/api/a37", "a37", "a37"),
    A38: baseRcServer("/api/a38", "a38", "a38"),
    A39: baseRcServer("/api/a39", "a39", "a39"),
    A40: baseRcServer("/api/a40", "a40", "a40"),
    A41: baseRcServer("/api/a41", "a41", "a41"),
    A42: baseRcServer("/api/a42", "a42", "a42"),
    A43: baseRcServer("/api/a43", "a43", "a43"),
    A44: baseRcServer("/api/a44", "a44", "a44"),
    A45: baseRcServer("/api/a45", "a45", "a45"),
    A46: baseRcServer("/api/a46", "a46", "a46"),
    A47: baseRcServer("/api/a47", "a47", "a47"),
    A48: baseRcServer("/api/a48", "a48", "a48"),
    A49: baseRcServer("/api/a49", "a49", "a49"),
    A50: baseRcServer("/api/a50", "a50", "a50"),
    A51: baseRcServer("/api/a51", "a51", "a51"),
    A52: baseRcServer("/api/a52", "a52", "a52"),
    A53: baseRcServer("/api/a53", "a53", "a53"),
    A54: baseRcServer("/api/a54", "a54", "a54"),
    A55: baseRcServer("/api/a55", "a55", "a55"),
    A56: baseRcServer("/api/a56", "a56", "a56"),
    A57: baseRcServer("/api/a57", "a57", "a57"),
    A58: baseRcServer("/api/a58", "a58", "a58"),
    A59: baseRcServer("/api/a59", "a59", "a59"),
    A60: baseRcServer("/api/a60", "a60", "a60"),
    A61: baseRcServer("/api/a61", "a61", "a61"),
    A62: baseRcServer("/api/a62", "a62", "a62"),
    A63: baseRcServer("/api/a63", "a63", "a63"),
    A64: baseRcServer("/api/a64", "a64", "a64"),
    A65: baseRcServer("/api/a65", "a65", "a65"),
    A66: baseRcServer("/api/a66", "a66", "a66"),
    A67: baseRcServer("/api/a67", "a67", "a67"),
    A68: baseRcServer("/api/a68", "a68", "a68"),
    A69: baseRcServer("/api/a69", "a69", "a69"),
    A70: baseRcServer("/api/a70", "a70", "a70"),
    A71: baseRcServer("/api/a71", "a71", "a71"),
    A72: baseRcServer("/api/a72", "a72", "a72"),
    A73: baseRcServer("/api/a73", "a73", "a73"),
    A74: baseRcServer("/api/a74", "a74", "a74"),
    A75: baseRcServer("/api/a75", "a75", "a75"),
    A76: baseRcServer("/api/a76", "a76", "a76"),
    A77: baseRcServer("/api/a77", "a77", "a77"),
    A78: baseRcServer("/api/a78", "a78", "a78"),
    A79: baseRcServer("/api/a79", "a79", "a79"),
    A80: baseRcServer("/api/a80", "a80", "a80"),
    A81: baseRcServer("/api/a81", "a81", "a81"),
    A82: baseRcServer("/api/a82", "a82", "a82"),
    A83: baseRcServer("/api/a83", "a83", "a83"),
    A84: baseRcServer("/api/a84", "a84", "a84"),
    A85: baseRcServer("/api/a85", "a85", "a85"),
    A86: baseRcServer("/api/a86", "a86", "a86"),
    A87: baseRcServer("/api/a87", "a87", "a87"),
    A88: baseRcServer("/api/a88", "a88", "a88"),
    A89: baseRcServer("/api/a89", "a89", "a89"),
    A90: baseRcServer("/api/a90", "a90", "a90"),
    A91: baseRcServer("/api/a91", "a91", "a91"),
    A92: baseRcServer("/api/a92", "a92", "a92"),
    A93: baseRcServer("/api/a93", "a93", "a93"),
    A94: baseRcServer("/api/a94", "a94", "a94"),
    A95: baseRcServer("/api/a95", "a95", "a95"),
    A96: baseRcServer("/api/a96", "a96", "a96"),
    A97: baseRcServer("/api/a97", "a97", "a97"),
    A98: baseRcServer("/api/a98", "a98", "a98"),
    A99: baseRcServer("/api/a99", "a99", "a99"),
    A100: baseRcServer("/api/a100", "a100", "a100"),
    A101: baseRcServer("/api/a101", "a101", "a101"),
    A102: baseRcServer("/api/a102", "a102", "a102"),
    A103: baseRcServer("/api/a103", "a103", "a103"),
    A104: baseRcServer("/api/a104", "a104", "a104"),
    A105: baseRcServer("/api/a105", "a105", "a105"),
    A106: baseRcServer("/api/a106", "a106", "a106"),
    A107: baseRcServer("/api/a107", "a107", "a107"),
    A108: baseRcServer("/api/a108", "a108", "a108"),
    A109: baseRcServer("/api/a109", "a109", "a109"),
    A110: baseRcServer("/api/a110", "a110", "a110"),
    A111: baseRcServer("/api/a111", "a111", "a111"),
    A112: baseRcServer("/api/a112", "a112", "a112"),
    A113: baseRcServer("/api/a113", "a113", "a113"),
    A114: baseRcServer("/api/a114", "a114", "a114"),
    A115: baseRcServer("/api/a115", "a115", "a115"),
    A116: baseRcServer("/api/a116", "a116", "a116"),
    A117: baseRcServer("/api/a117", "a117", "a117"),
    A118: baseRcServer("/api/a118", "a118", "a118"),
    A119: baseRcServer("/api/a119", "a119", "a119"),
    A120: baseRcServer("/api/a120", "a120", "a120"),
    A121: baseRcServer("/api/a121", "a121", "a121"),
    A122: baseRcServer("/api/a122", "a122", "a122"),
    A123: baseRcServer("/api/a123", "a123", "a123"),
    A124: baseRcServer("/api/a124", "a124", "a124"),
    A125: baseRcServer("/api/a125", "a125", "a125"),
    A126: baseRcServer("/api/a126", "a126", "a126"),
    A127: baseRcServer("/api/a127", "a127", "a127"),
    A128: baseRcServer("/api/a128", "a128", "a128"),
    A129: baseRcServer("/api/a129", "a129", "a129"),
    A130: baseRcServer("/api/a130", "a130", "a130"),
    A131: baseRcServer("/api/a131", "a131", "a131"),
    A132: baseRcServer("/api/a132", "a132", "a132"),
    A133: baseRcServer("/api/a133", "a133", "a133"),
    A134: baseRcServer("/api/a134", "a134", "a134"),
    A135: baseRcServer("/api/a135", "a135", "a135"),
    A136: baseRcServer("/api/a136", "a136", "a136"),
    A137: baseRcServer("/api/a137", "a137", "a137"),
    A138: baseRcServer("/api/a138", "a138", "a138"),
    A139: baseRcServer("/api/a139", "a139", "a139"),
    A140: baseRcServer("/api/a140", "a140", "a140"),
    A141: baseRcServer("/api/a141", "a141", "a141"),
    A142: baseRcServer("/api/a142", "a142", "a142"),
    A143: baseRcServer("/api/a143", "a143", "a143"),
    A144: baseRcServer("/api/a144", "a144", "a144"),
    A145: baseRcServer("/api/a145", "a145", "a145"),
    A146: baseRcServer("/api/a146", "a146", "a146"),
    A147: baseRcServer("/api/a147", "a147", "a147"),
    A148: baseRcServer("/api/a148", "a148", "a148"),
    A149: baseRcServer("/api/a149", "a149", "a149"),
    A150: baseRcServer("/api/a150", "a150", "a150"),
    A151: baseRcServer("/api/a151", "a151", "a151"),
    A152: baseRcServer("/api/a152", "a152", "a152"),
    A153: baseRcServer("/api/a153", "a153", "a153"),
    A154: baseRcServer("/api/a154", "a154", "a154"),
    A155: baseRcServer("/api/a155", "a155", "a155"),
    A156: baseRcServer("/api/a156", "a156", "a156"),
    A157: baseRcServer("/api/a157", "a157", "a157"),
    A158: baseRcServer("/api/a158", "a158", "a158"),
    A159: baseRcServer("/api/a159", "a159", "a159"),
    A160: baseRcServer("/api/a160", "a160", "a160"),
    A161: baseRcServer("/api/a161", "a161", "a161"),
    A162: baseRcServer("/api/a162", "a162", "a162"),
    A163: baseRcServer("/api/a163", "a163", "a163"),
    A164: baseRcServer("/api/a164", "a164", "a164"),
    A165: baseRcServer("/api/a165", "a165", "a165"),
    A166: baseRcServer("/api/a166", "a166", "a166"),
    A167: baseRcServer("/api/a167", "a167", "a167"),
    A168: baseRcServer("/api/a168", "a168", "a168"),
    A169: baseRcServer("/api/a169", "a169", "a169"),
    A170: baseRcServer("/api/a170", "a170", "a170"),
    A171: baseRcServer("/api/a171", "a171", "a171"),
    A172: baseRcServer("/api/a172", "a172", "a172"),
    A173: baseRcServer("/api/a173", "a173", "a173"),
    A174: baseRcServer("/api/a174", "a174", "a174"),
    A175: baseRcServer("/api/a175", "a175", "a175"),
    A176: baseRcServer("/api/a176", "a176", "a176"),
    A177: baseRcServer("/api/a177", "a177", "a177"),
    A178: baseRcServer("/api/a178", "a178", "a178"),
    A179: baseRcServer("/api/a179", "a179", "a179"),
    A180: baseRcServer("/api/a180", "a180", "a180"),
    A181: baseRcServer("/api/a181", "a181", "a181"),
    A182: baseRcServer("/api/a182", "a182", "a182"),
    A183: baseRcServer("/api/a183", "a183", "a183"),
    A184: baseRcServer("/api/a184", "a184", "a184"),
    A185: baseRcServer("/api/a185", "a185", "a185"),
    A186: baseRcServer("/api/a186", "a186", "a186"),
    A187: baseRcServer("/api/a187", "a187", "a187"),
    A188: baseRcServer("/api/a188", "a188", "a188"),
    A189: baseRcServer("/api/a189", "a189", "a189"),
    A190: baseRcServer("/api/a190", "a190", "a190"),
    A191: baseRcServer("/api/a191", "a191", "a191"),
    A192: baseRcServer("/api/a192", "a192", "a192"),
    A193: baseRcServer("/api/a193", "a193", "a193"),
    A194: baseRcServer("/api/a194", "a194", "a194"),
    A195: baseRcServer("/api/a195", "a195", "a195"),
    A196: baseRcServer("/api/a196", "a196", "a196"),
    A197: baseRcServer("/api/a197", "a197", "a197"),
    A198: baseRcServer("/api/a198", "a198", "a198"),
    A199: baseRcServer("/api/a199", "a199", "a199")
  };
  
  module.exports = apiList;