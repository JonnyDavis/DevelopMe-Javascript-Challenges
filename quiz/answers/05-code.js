let crack = code => {
    let result = "";
    
    // start at 6 - it's the 7th item
    // add 7 each time
    for (let i = 6; i < code.length; i += 7) {
        result += code.charAt(i);
    }

    return result;
};

const cracked = crack("_5X4EjG4Cm9#Eo 8Dd@Cov_6kNhdk6W8_J .hZ3yTwr6JZ#qoD.74mErj7 2Wbk_wEUx8.X7.v_. D9@Hq Y3Nu.7aot5Ay.8u.Z339z T!98NrdzD@7C2iJ.jf 8d.Upf6X r7P@BSi#xN7H t!YGp8h!5_SygM");

console.log(cracked);
