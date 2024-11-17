import React, { useState } from 'react';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion'; // Correctly import framer-motion

const About = () => {
  // State to manage showing more testimonials
  const [showMore, setShowMore] = useState(false);

  // Testimonials data (you can add more customers here)
  const testimonials = [
    {
      name: "Aman Gupta",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdyzzpzkOm8vfDeyi8HIJQaPQBc9TDTYcOg&s", // Corrected URL in quotes
      text: "Fancy Garments is amazing! I found the perfect outfit for my special occasion, and the delivery was super fast.",
    },
    
    {
      name: "Rahul Kumar",
      photo: "data:image/jpeg;base64,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", // Example: assets.john_photo = 'path/to/photo.jpg'
      text: "The quality of the clothes is incredible. I love shopping here for all my fashion needs!",
    },
    {
      name: "Rahul Tiwari",
      photo: "data:image/jpeg;base64,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", // Example: assets.emily_photo = 'path/to/photo.jpg'
      text: "Customer service was top-notch, and the shopping experience was smooth and enjoyable.",
    },
    {
      name: "Abhay Mehta",
      photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUTExMWFRUVFxgXGBcWGBoaFhsYGBcXFxUYFxgYHSggGB4lHRUaITEhJSkrLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHyUtLS0tLS0tLS0tLS0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABFEAABAwEFBgMFBgMGBAcAAAABAAIRAwQFEiExBkFRYXGBEyKRMqGxwfAHFEJS0eEzYnIVIzSisvEkQ3OCFjVTkrPC4v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQACAgICAgICAwAAAAAAAAABAgMREiExQQRRYXETMhQiof/aAAwDAQACEQMRAD8A0lCEJmEqRCDKhCEEEIQgBI5wAk5AJVT/ALQr+FGmbOwzUqNlwGrWGRnwLoIHQncgK7t1tuapNmsxIp5ipUGrh+Vp3N57+hzpJc0t8rXzOgAnhm45A956rnVqmS2mQD+J0ZidZJ07ck2p2p4LSJLAYkiQdxjPzdp6oM5pU6lP2Xwd7MBcY5gE/AJzam1SG+GBzhkO6ecH4rzarVTcM3yT+V2YGufmLhE6QmVfyHEKRGkn2ueeWXXLRAeq9J48z3up7jLQ4nfmWxCQ0JMlxeP5uHINmek5p7aZeA4s9rT2HkjnAJUPeniM3+hEjkRA96CLhY55DZadQTHuE69OC5U7G8ebTuJ7ifqE3o2hwzJAjdA07D5d13fXYcnSQdC0x1yjfzG5AJaqsnPM5boP/wCvrRTGx20VWwWhtQeamfLUYDGJvQ5YhqPTeoyjQoVPK1zgYkYnNbnv1EehXGlaDTJZu0OIZjrOU9cuSA+l7rvGlaaTatJ2JjtDv5gjcRwKdr562Q2sfYK2Zd4Lj52t3bg9oOpG9s56TpGzXFtTQtVTwmvDnFuJpGhj2h1Az4kTl5SgJ9CEIAQhCARCVIgBCEJgqEqEgEIQgBCEIMIQhACwzaK9BaLVXqB3lxOgj8rfKMJ6NnudxW1XnVDKNVx0axxy5NK+fLucXOzMScuup+KAKZwswlsYzvOm4nmYnP8AlTEhxqeXC4tECSDA0y/UJ7fL/EgtE5xxyGfwHvPZK7sVMNbAje0CenGcjpw1ABSDrY2PD2PzAMtdDyGgxk4tGWkyMtDovZrlx8jgRMeVx+BzAj5J3snc7qziDMkEE6SNfN+aNRlkpG27NPs9WatMBk+Qj2J/mcIDZOnXThn/AC13prGKdbQlrczCQHNI0IDhPoRrl8VV7TVmRJPCden7aKx31Sa460zO9jg52/KRqOpUA6xuOjTCqLQiaSbUm7/mn7aNKJOKOWXqc+ea72OzBlMmoCOG8kdPr9I61VcRyEDdIVbTp5dh/CSD9eiHFwzOfNcw08AfiurKbuBLfgmNPLj7vhop7Zm8nUKgc0w5kObzLXAx3EtPJxChBZXcE6uUTWaIPDKJ4ZT9b0RI0+nrPVxtDuIBXRR1w2kVaLXAg7suQG6THST3UigghIlQCISpEAIQhMPSEISAQhCAEqRKgwkQhARu0zw2yWgkwBSfproV88Ne5rsgcgRnzGfdfQu1LC6x2gASTTdl2WEUmyTlmcgOn7pSINiDhIAjFEHgDiy5aBPLssrpwnMbuc/7e5eqdGY3xv8Adl2+tVJWOGEHf8O6iZaRHa97H3e2mAYzPHf0+t/pbaxaGlrxIIjPRw5zlPx+FW2YqSZJ7DTurlTMjNcNvLsjwpl8XVZ2Nc9zmtYNcUzO6Rq7huOmqqFe7XWj+DROvtVCRluyMlg65xpmtPtN2Una02kawQInjh0Xg2YRAAA4AZeizjJxaceTKbTsy538R7nHrDewGfqUxqbNsG4ei0u2WKFEWiyqoz2n2f8ABT1Ci/2GAZCcU7sA3SrHXs8JqWLWuSZZziiEY27m8FVbS3wbQ6MsLpHxCvYCpl+sxV3AamAujHPbnzRqH0Ls+Zs9MzOWR5Tl7lIpndFn8OhSZ+VjQesZ+9PFu5QhCEAiEITAQhCA9IQhIBCEIMIQhAKkSoSBvbQ0sc12jmuHqIWCBmCo8HcSCD7h7/ct1p1C61YAfK2mCRuJLiBPooba3YmjaHeK1obVAnICHEAwHDeuac/c9dOyPj6iO+5jbLW2iBxOYjnlGXDNW/Z3ZPxGipUd7WYEaKgUaLnuLWktcHAf9xgR2JiM1eqd83rYmgVrM2tTAEOYDMcyyY7tCMszrVU4oje5XO77mbS/ET7h7tVMxAWdN+1Ci3I0KznjVtPC7vOIZZwoi8ftKNeWspVxwAa0nqQHfssa4rz5a2yV9NPfU5pBBWO1drLSB5WVhnniYSVzZ9odqpnzM9Q4Jf40+j/niPLV7fR3qFqU5Kr9g+0AVxDm4TyOXOeCmrHb2VcwspxTVvTJW0dOdSzzko602eF72gvltEZHNUm37T1iTAkfXBbYsVp7Z5c1a9LI5qhLouw2m82Ut2Jrnf0tgn65qOpbQPOozVl+zy9bOy3mpXqNpufSDGF2TS7EQ4YtBkG6xquulJrLiyZItDaGiEqELVgRCEIASJUiYCEIQHRIhCQKkQhIwlSJUAIQhAM7A3DaarjphpnsC/5pxWvdlSoKbATqS7cI0XivRxYhpjaW99W/P1TXZ+m3wnMc0ioSQ6Rn5V5191tNXqxxvWLz9RH/ADTLKVhBvKoIiLQ7plUMe6FrdNoyWf17rqUrwc7A5zfFLg4DKHjP3n3FX2k/eozzuY/SMcaif2pf2nbNmrSbXs1KbQx4ksye5kEOBIgugwfXmm9gu/7lY2BlF9atUaH1HR7T3AEhzzqBMDPQLQXUsQ5FNLO1wosOpDQ0/wBTfK4diCEudorr0qta8t+2R3le1qY0lzadGBIa5ji4+aMOTS0cddDrqAybaLQ+iKz8DmlxGEgA5bxx/Y6rTr7pis3CWydYPFU1+zDnH2WtHEremakx3Cb4L73EoitdFOvRfUYzBUZTdVDmZSGAuc0gZGQDB1mN0gv7C99KlRb4bmvAmsd5aXAtDBlhdgkZ7zyzs9goeBRc1jRDgWMd5sRe+AYExGAuOmRLNMRUzb7jFKzS6DUcJceesBO2TUfZVxxM/Xpit513VaroLsIJ1guiSG5jfA3c+C42S6/Ee1nhuJdGHE4gGQCMxxkeqna9kAyA0c73uLoy4BzQu9gsrGuDmFzHDSDp0ldMWrEOWcdplFWS56Dnmm5r6dRuRGPf3Cstp2Er07GatCtja9gfUoVKbCXYZILXRmQCSMgcznnCKd108WODi1kkyTzO9aa3y2drYz8NrQOJLQ1o7kgd06zvek5K8dbZz9mu0FqNejZQ5j6Lg4ubFQuptawukEmGicLY08wgLWlX9j9lKd2se1jjUc9wLnloBwtEMaAJyGZ6uKsC0YyRCEIASJUiYCEIQT2hCEjCEIQAhCEgVCEIN4qtkJXFr8DzOJhkQexB7Er0uZIAzB6gfouX5FJnuHX8e8a4yr1utIbWeDpiPw/ZSVmqyAqda7wDrVUknCDBBGmg/wDq5Wax1tB36a/oVyXrPTqrPlYaDJCYW+g+nLqZBBzcx2Qn8zSPZPERB5GSXFC1Dio++rxDGkkwrmY4prE8kBarzg+djmnpiH+WVxoW9r3Q1j6hOjWjD6udp6FRlW1PtD4ZpxViuawmgW1AZw6jjIj9+yjr6dEx+T67rE5jxUrNBeBDGt9im3g2dTxccynF71iWkLz/AG7aSZbRpRMearDo4+wR2S31bQ6n5m4XTy+I1TtHXlnXfKNwy68XCnUIdk0k5x7J5xuOh6N4J3ZmNOYg9CCPclvq00jVw68VGWNjSSIynKdY3LeJ6jbO0f7TpYmgBuZjrkPUq6XLXbaGNeNKcN6vDQCegnLiTO4E5+GNAyACuWwv+Hf/ANV3+li2xT6c3yI62saRCF0OQJEIQAkQhBBCEiYdEJEJGVCRCDKhCEAqE2rWxjKjaRMPeCQOnNc7VelKkcNR2A8wY7FGk8oPV5qVA0EkwAuNC3UqnsVGu6EfBVTbu+CyzOLci4EN6byjXsTPeoVejbWV7XVqCcDqktz4OwmO7TpxKuoIZhk6ZZkDmSB9fNZ9s9Qcyw2atqZfPPE97m9PnKullcHNBGpz0JgZnI7jmZ/2K4Mk7nf7ehjjjGv0mLJWkT6Cd3RUzby1kODZgQTO6dyslC0EayJgRu4AfXNVva2z+PUEAkTBjmsaxq3beZ6nRtsRQdWacFRpjU75+XFXj+zngCasxzBG7QR8Z1TG4NmKDGCaYkjM6O7EZwpM3Q2n7NR0cMUFXvcisRHUygrxszqYOAguzMafFQV5G01mQ9xbA/NHzzU5elMtcSHOy4gH1y+ahbdRObi9s8CCPeCnFfy6ZxRMKc9r6LpdJ+Y6p9YLwY85apLVanNBGHFybmPfChLLnUloLZOh1Ge+F0TG47edaeFul0q1cleNgx/w08Xu90D5e5ZjbbVhEToJVx2H2zsbaNOzvc6m9oMueAGkkknzA5a74VYa+2PyL76aAkSNcCJBkHQjRC3c5UiEiAEIQgghIhAdEIXKpXARo5mI8uq8ueAmlSq4712qOmmY1hVxZzk+nEXiHEimMZGomFzo3v5ocwtPA/WaqFzXj4Fswk+V5jPcVd6tFtUOyEjTrCNQibyrH2hVzTFKuz2mOBHrmpZ9KneVla4GHESDwKqO2Ad4cOJJmM+H0E9+zG3Qx1J2oOXRNO0ldt3/AHRhac6tU4ARoAdT6Z9lU9vqxqFzBoxhgdAtCvEBrg4/hBjqRHwn1WaXl5i8nOSR2OSjJ4a4e7bTWxVibXuynTMgOpxI3GSQR0K5XFXdS/u6rYqMJDm5zxkHe06zvk7wV1+ye1YrIKZ1YSPQqe2guMV4e04KrfZeB/ldxC8nnxvas+NvZ1uImPpC2204TicXHKIE4chrluy9/c+GWlrgDJJEENg/I8/qIUParS6k9zajSx/fCRuLc8ux7IpXmWknFB45QSJiJ+A4Lfh0y59tAui1Fwgkk8z7k9tjMQggFUW674wESZOR48fdl71K1b9LxkYBy7nQab/1WVscrreDW9rsq5mnVI1ycTHTeqnaH1wcNTCTx4/BWCveZcNdBn1nh3Cqt6Wg4iZ/bgtKRPg75I1uDljTofcIUTaabRUxDUeiRt5nSeSj69qhxP8AuV0VpLmvkg6t1UvcBOuccANVFWthDiQnooloBd7ThPQbgm9pfuXTWuocV78rJ3ZTbC02WGtfiZ+R+be29vZaNYvtCoOA8Sm9jt8QR2OSxOiYKn7K7FruTLem1WXaGy1BIrMH9Rwn/MpGnVa4S0hw4ggj3LELM6HctFIXbbqtnfipuLeX4T2RocmwoVCpbZ1xGNtMjoQT0gq5XdbW16YqN0O7gRkQlo4tEnSVeUqRvRtHhuIe3y/m3DrwXG8ntZBd/Dd+LgTpPELpaq3h1RizpvEHkdybX1ZB92qMHskeXlvCtzzO3OgYcaZzBGXfQzv/AEXZshh/laeukwVHXLa/FosedQMJ6jKFL1aflLhvGfomTOL4oeLZKdrZ7bHRUjrr2Vn2WvXxG+YyTnyUNsY9rxaLK/RxcI6qPuMus9Z1B2Tqbo6t3H0SOVr29u/HZy8DTNUvYevFdmcS8DLrotPpgWigWnOWkH0WP3YXUa7m/ip1MuxyQTUdsKmGgSN+SzquJIHET6hXTaqoTQBOmPI78Ja1w/1QqReD4f0IB6jVRdriky+zu8DQtD6Z/O74lbI0hwlYNUf4NsDxlig/I/Aeq2K4rwDmDovL+RTVtvXw23Ql9XQyu0te0OH1pwPRZ7emy9Wi4mmcTfyn2h33rWXgEJharOHarPHltTwu1K38sZNV9MkQQcxGh6x3Xt18O3g5TIGmqvt7XUw6gHrn8VVLZdDQcpHf9V2VzVt5hz2wWjxJib1bG8TuPLI91E228wVJvuwD8Tvd+ijbwpsYDAz55n3rSLVZzW/tFMquccsuKeUbKZk5/ul2dsZeXn+aPcP1VrbdHl03LoiHJe2lergta0nKJHzHzUfUdJKn71oDA8AtLmYS5o1bJjP1VdVM4IzUKx0aeEAcs+6r9BsvaOaswHnjogTJxZ6E5lPWU968MYTACW96nhUXuGuGB1OQ+IVI2YWSsaniVRpOFnIAxI65nurZs3fzrOMDm4mkzwIO+NyhLssWCg1sbgnVCjKDidLx/wCJaHF3/tSqneB9ZoS4q5y0y1sFRkFNbLUxNNJ2hEfoulGrLU1qZGU2SF2bmlUrUTkQSR6x+itdD2IPRQFrp4bXSqjIVWOa7rH6hTVhdrlkDPWd/uSNmVKobNeFRoyzn3qY20s+F9G1sGThgf8AIlRm3tHw7ayoNHiO/wBBWSyM+9WF9M5kCR1GaDSWyVrxCJVC2ws/gXgTuqQe+9TexNrLXhhOYML19rNi8tKuB7D2gnkTHzTJ0vurUc6hTD2+EKRc9hbmYpkgtdrIIGXBVC9P4j4/MSOkmI5K1XhVBqUXn2SwsMflc3CY7OKq9uoGm5zXDzAkcuGXLSOSi8dLxT2hb6shdTFZutM5/wBOhPY+6VZ9kr1lgEpjY3gS0iQRBHERmomzMdY6wb/y3GWH5HmFy58e67d/xsurcWuWe15LpUrKAuu14mjNSNR2S82YelEG141xCrFuqiVO2ynIUDa7MtaFZCWyvwUHbRMyp20UQE/2QuH7zaMbh/d0ocebtWN90nkBxXVjjlOocmWeMTMnGyWz2BuFw80S7+o5kdtOyt9mu4AZjh05dU8uyx4W4t7iSeWehUq2iIyXoa08aZm07ZPt5Ym0qzSMnVWEP54Iwn/NHYKkPZBV3+1ExbWDhSb6lzp+SqVqp70l18PN3UpqNVgszZrOHMKPuGzy8HgpSwtm0uHNAlKinhY9/AfHIJptAyW0mbnvB7Nz+MKTvukWWU83MH+dqbVqOK00wdKdMHu85d8imhKGzxTHRe7JZ96kq1INp56BN7smq7FEMboOJ4plt4woUtgHJKgbPqtXwaxafZdovVoM6Lzetm8Ua5jRQgt7qLg2pMcUjTrW42NO9j2uHf8AcJ5ZDGKfyzG4Qo66rQ1znAbwf1B9y7XjW8OlVI3MOfWAgKvt3Z/GszLQ3Rr/AHTC6fZ7a8XlO/JSlKz+NdZbr5XH0Mqo7AVsNSJ0KRpC0M+7W4jQF0jvmrftTYvvVhqs1LqZjqBI94UFt7ZYfTqj63hWi4qwqUBPBA/DOdn63j2Zk+0wR3GqeXtQZVs3inKpSwt6jEGwek6pjQZ9yt9WicmPdib0dqpx9mbifSd7FQeh3Ecwc+yZeJ2pdnBmU/tNhFek6mcne007w4aFSNnuYtLg/KPQjcRyKaWh2CplyEclOmnLvcInZy9i0mlUOF7SQZ4jgrbTvA6EjJU+/bACPvDdW5P5t3k8xr0lJZXOiQ498wuPL8bvcPZ+PknJXcLZUtzTlofrNR9rfPdRVe8CIx7lHW6+XP8AKzyj8x15xwWVcFttZt9ulvtIDsI8zyYAGfIZbydwWl3NdpsNnYBm4Ampze7Nx5xp0AVP+zG4/vFc2l4mnQMNn8VWJnnhBnqW8CtRtTRhz3rvx0isPK+Zl5Txj052DC9pw6Oz7pa9VtJpe44QySSdIAkqOZVFmxBxAb7TSTA4uaTu4qibVbWffcTKcii3OdC85ajgPjnuC0cUKrtBeZtdqqVjMEw0GJDB7Iy9e65VKMwlu+xmo/krNdtzmo8CEK3obP3dhaXQmt3M/wCMPUK7VbGKbMIGip9NuC1tPGPihO0/tdSizHkWH0e0/JeLws4Y9rxrUNOOWEmfinm3jYsr/wCkn0Er02jjNk35ST2BTJ52rrYKTGD2qjg0fNS13WXw6YA3BQ+0Ix2+z09zGuefcB81YbU7BSJ5ICN8UJVCfeDxQgluoEl5YVGWi2Uqj30KoiD5H8uaSw3h4gDtHN1UZtbThzazd+RSUSg59jtNMH2S9ue4tJAkdirTtAwmjV19nhzCpFK3ePRfTcfPTb4lM7/Lm4emfZaBeXmpVYJJwE9JQDPY52OylvUKhXCzwrbUZwcfirlsBU8rmqr3hT8K83fzGffKDjwvW0tk8WzZZkAEdk12ItUswncpuzjFTjkqpdB8C1PZuJyQDX7ULDhNK0tGbDB6JzY3ivRa4agKx7S2IWizPbqSMuozVG2JtBE0juJCIKYWGxtbWbgdkdx+R5Ko35SdTquaRBB0+HuVntTDSqBw4yu20V3ttNFtdvttGfMcD0RIr0plNksLTJDgcXQjVQ12ZNiZLcjPFuRzVoqMw0stXfDeqeKnh2hzYyqAEdR5T8veptD0Pg5ON9fbvbRP7kd9FHCxOeQ0ZueQ1rRObnENbn1Klm0J1Cn/ALPrA2tbS+PJZWz1qPlresAOPdqmHf8AItwpNpaDct1tsdCnQYBDGgE7y7Vzj1JJ7rpetpZTpl7z5W+10Xd85O4HPkFmm2d/G0PNOmf7tpzj8Tp+A+PZW8Ke0HtRf1S1OwyRTBybxjIOdzhM6Nmw0jzTm77vL3TCmb2seBrBGpTLei7M3MXMneVcLPZG2dknMr3s5ZMNMHkmN92uamAbkJd6bfFB+vrRUy9aeCuw8HR6q+XWwQqttfZ4eDHA+hQD/bzOwl38nxaV02cIdQouP4I9IhcdrDjuueDR6A5+5RVw3iGUg3l25Jj0kLO/x7zqOGjGNb3JJPyUztNU8rKY1eY/VQf2dg1X165GTnmDuMZZeimaQ+8Wtzvw0xhHXegS5f2Y1KrH4IQjZaUGtX8KsHt9l274p7fudGdRqosAN18wGiU27+4e127RJSAu+sG2loJhrsTCeAe0t+a2DJzHgEHyEZdlhbjJJ4LWNirYalGHZkNInpogzfYd+Go9qjtuqOC2U6g3x9e5PtnfJanjmR713+0SyyxlQbjHz+SCjwst0VJYOig9pLPgqNqgaHNOtlbTipNngn97WcVKZCD9HNiqY6Y6LOrbQ+620/leZHdXHZ6uYwndkovb2wyxtUasPuQDm2U/EpzySbM2mcVJ2nNcrir+JSHRMGP8Cv8AXFCUZeTfArvs79HGaTjzzwfp6cFUr5u4mXj2m5t58R3Wi/aFdorUW1mjMBU2jWNWniPtNydz3B3yP7oXS01ncGFK0zRxN1I+S077NLs8CwU3EeevNZx44/Y9GBvvWYMsRNTwR/zSMPV5wkdi6e61/aO9ad32Qvy8jQ2m3i6IY360AJ3KYjTu+Vm50rMIH7QNo/CH3akf7x/tkfhb8nHd68JpFkspdC4XRTfaarqlQlznHE48z8hoBuAVyuy7ROicOGZ06XFdnJe9pLL5qY/mVksdnDAm962TGWuH4Smg/otDKQ5BUd1XFVceatd723BR5kQqbREZlBrddTsgojbKjk09k/uSpoum0FEVGROYIKZI21Usd2VG8Gn4LNK14FrDBich/wB2Q+K1CraGtoPp6lzcIHM6LG7wYWhs/hOF39TDHy9ySqtT2QvNrKRpMgNpUiR24qe2fpGnRxu9qoZ9Tksy2AtgxvDtHNI94WnvtjXup0mGchMbgmmY0mcSEsBCSmVU7TBg70wvup5SE3/tKm7KYPA5fsm95V8TInMIPSOFfPkVpP2f2mHYeLVlherpsdbMFRjucdlO1celwotwWw8ypzaizeJZ3DeBiHZRV5MisHqwgh9PqPkrZQq+xVbIt4FW92YVEutxoWlzDx+avFN0hI4Q5b4dWeKk7dSFWkWneE2vKnlK93fXxNhBqls/VNKo6k7VphOdpKUQ8LntFQ8G0NqDR0A9VIWporUSN8II7u9wtFjg8IWb2dho2ksOhO/SDkR71c9jLZFOq0/haTHRVvaWlPhWgCA7XqgJPZ+6JttJx9mniqDsMMHo5zT2CgPtGvk2u0BjT/d0nFo4F2jne6B34qx2u9Pu1kfWBio8Ckzq6SXdgJVCZQmDwLfiB80SqvjtdNjrthkq23fQDZJgKM2UpQ0jkpS0kQG5RIPoQhMnVSrwzXA1SdAV0pu8vZcGuQSGvVznHMZBR1jsoq6ucOQgfqpK8cyVH3W6CQmEtYqYYSBK5XhXMHMrpRqZ9lGX1aRmEEjLPXhxO+fr5KlX00zXHCo53q4z8VaGvgFxyHPiq7e0F1R244ilK6+UVcVrNJ56fNa7sI2Wmo45xqd3ILlspsrSbYmsr02udUPiOkZtJHlAIzBA4c0z222cDLIDZy9nhvDnAPd5mHIznukHspidNbU32vGJn/qD1CFiOB/FCpnxgwvDQqTvjUf9On/8bUiEmkeEK/crPs9+HqhCiPK7f1aVen4eymrv/hjohC1cvtUb0/xXcfEq52P2B2QhKThxtuhTK7UIQEftp/Db1CS6fYPRCEBEbMfxbR/Q/wCBTK8v/L6f9f6oQgGW1P8AhbP/AFO/0sUXQ9nu3/UEIR7VH9Wl7PfJOK3t/XEIQhLvuTXce6VCCRlv3qMsOp6oQmSQbqoa9vaHRCEyjyh7x0Cr/wCIf1fNCFMtYbmEzvr/AA9b/pv/ANJSoUOllqEIVuZ//9k=", // Example: assets.michael_photo = 'path/to/photo.jpg'
      text: "Fast delivery and great prices! I’ve recommended Fancy Garments to all my friends.",
    },
    {
      name: "Sarah Wilson",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwe4kzPRLWNBj34mlrylYKJ2O5IUJwXbQjGA&s", // Example: assets.sarah_photo = 'path/to/photo.jpg'
      text: "I absolutely love the variety of styles. There's something for everyone, and the service is unbeatable.",
    },
  ];

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Animated Image Section */}
      <motion.div
        className='my-10 flex flex-row gap-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
          <img className='max-w-[450px]' src={assets.about_img} alt="About us" />
        <div className='flex flex-col justify-center gap-6 w-2/4 text-gray-600'>
          <p>Fancy Garments is a brand born out of a passion for fashion innovation. We focus on creating trendy, high-quality clothing for every occasion. Our journey started in [Year], and since then, we’ve been committed to offering the best shopping experience for our customers.</p>
          <p>Our mission is simple: to empower you to look and feel great while enjoying a seamless shopping experience online.</p>
          <b className='text-gray-600'>Our Vision</b>
          <p>We aim to become a global leader in fashion, providing timeless styles and unparalleled quality to fashion-conscious individuals everywhere.</p>
        </div>
      </motion.div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Stats and Achievements Section */}
      <motion.div
        className='flex flex-row text-sm mb-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className='border px-16 py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product...</p>
        </div>
        <div className='border px-16 py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface...</p>
        </div>
        <div className='border px-16 py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team is here to assist you, ensuring satisfaction...</p>
        </div>
      </motion.div>

      <div className='text-4xl py-4'>
        <Title text1={'OUR'} text2={'VALUES'} />
      </div>

      {/* Company Values Section */}
      <motion.div
        className='flex flex-col gap-6 mb-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div>
          <b className='text-gray-600'>Innovation:</b>
          <p>At Fancy Garments, we believe in pushing boundaries and constantly innovating to bring you the latest fashion trends.</p>
        </div>
        <div>
          <b className='text-gray-600'>Customer-Centric:</b>
          <p>Your satisfaction is at the core of everything we do. We listen to your feedback and work tirelessly to improve every aspect of our brand.</p>
        </div>
        <div>
          <b className='text-gray-600'>Sustainability:</b>
          <p>We are committed to environmentally friendly practices, from using sustainable fabrics to reducing waste in our operations.</p>
        </div>
      </motion.div>



      {/* Product Showcase Section */}
      <div className='text-4xl py-4'>
        <Title text1={'OUR'} text2={'PRODUCTS'} />
      </div>

      {/* Display Product Images */}
      <motion.div
        className='flex flex-wrap justify-center gap-8 mb-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <img
          src="https://s.alicdn.com/@sc04/kf/H33c179f41bcd42b7814510dcabd6c913R.jpg_720x720q50.jpg" // Replace with your actual product image URL
          alt="Product 1"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://5.imimg.com/data5/IY/LM/MY-26694604/boy-fancy-garment-500x500.jpg" // Replace with your actual product image URL
          alt="Product 2"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://2.imimg.com/data2/LG/VI/MY-3760883/jacket-denim.jpg" // Replace with your actual product image URL
          alt="Product 3"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
        />

<img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp60iJ1WyTUZ59nnMq1r5MxQWgUXvxQPJXoQ&s" // Replace with your actual product image URL
          alt="Product 1"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://www.montecarlo.in/cdn/shop/files/22408599-4-36_1.jpg?v=1720770853" // Replace with your actual product image URL
          alt="Product 2"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20231013/GuRP/65295576ddf77915193a646a/-473Wx593H-443011920-olive-MODEL2.jpg" // Replace with your actual product image URL
          alt="Product 3"
          className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* New Customer Testimonials Section */}
      <motion.div
        className='text-2xl text-center py-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Title text1={'WHAT'} text2={'OUR CUSTOMERS SAY'} />
      </motion.div>

      {/* Customer Testimonials List */}
      <div className='flex justify-center mb-10'>
        <div className='w-full max-w-[800px] space-y-6'>
          {testimonials.slice(0, showMore ? testimonials.length : 3).map((testimonial, index) => (
            <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <div className='flex items-center space-x-4'>
                <img src={testimonial.photo} alt={testimonial.name} className='w-16 h-16 rounded-full object-cover' />
                <div>
                  <p className='text-lg text-gray-600 italic'>" {testimonial.text} "</p>
                  <p className='text-right mt-4 text-sm text-gray-500'>– {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className='flex justify-center'>
        <button
          onClick={() => setShowMore(!showMore)}
          className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all'
        >
          {showMore ? 'Show Less' : 'See More'}
        </button>
      </div>

      {/* Social Media Links */}
      <div className='flex justify-center mb-10'>
        <div className='flex gap-6'>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 hover:text-gray-800"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 hover:text-gray-800"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 hover:text-gray-800"
          >
            Twitter
          </a>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
