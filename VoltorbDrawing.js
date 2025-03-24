
var count = 0;
var count2 = 0;
var colours = ["#e07050", "#40a840", "#e8a038", "#3090f8", "#c060e0"];

function drawTiles() {
	//Tiles
		itx.fillStyle="#424043";
		itx.fillRect(72, 0, 216, 72);
		itx.fillStyle="#282828";
		itx.fillRect(0, 0, 72, 72);
		itx.fillRect(84, 0, 42, 72);
		itx.fillRect(174, 0, 12, 72);
		itx.fillRect(234, 0, 42, 72);
		itx.fillRect(288, 0, 72, 72);
		itx.fillStyle="#188060";
		itx.fillRect(3, 3, 66, 66);
		itx.fillRect(96, 3, 27, 66);
		itx.fillStyle="#28a068";
		itx.fillRect(24, 6, 24, 18);
		itx.fillRect(6, 24, 18, 24);
		itx.fillRect(48, 24, 18, 24);
		itx.fillRect(24, 48, 24, 18);
		itx.fillRect(105, 6, 9, 18);
		itx.fillRect(99, 24, 6, 24);
		itx.fillRect(114, 24, 6, 24);
		itx.fillRect(105, 48, 9, 18);
		itx.fillStyle="#a05850";
		itx.fillRect(237, 3, 27, 66);
		itx.fillRect(291, 3, 66, 66);
		itx.fillStyle="#b88880";
		itx.fillRect(240, 6, 21, 60);
		itx.fillRect(294, 6, 60, 60);
		itx.fillStyle="#a3a3a3";
		itx.fillRect(87, 3, 6, 66);
		itx.fillRect(177, 3, 6, 66);
		itx.fillRect(267, 3, 6, 66);
	
		//Voltorb
			itx.fillStyle="#a0b0a8";
			itx.fillRect(492, 48, 24, 48);
			itx.fillRect(486, 51, 36, 42);
			itx.fillRect(483, 54, 42, 36);
			itx.fillRect(480, 60, 48, 24);
			
			itx.fillRect(498, 96, 12, 48);
			itx.fillRect(495, 102, 18, 36);
			itx.fillRect(492, 111, 24, 18);
			
			itx.fillStyle="#e07050";
			itx.fillRect(489, 6, 30, 36);
			itx.fillRect(486, 15, 36, 18);
			
			itx.fillRect(498, 102, 12, 27);
			itx.fillStyle="#f8f8f8";
			itx.fillRect(489, 18, 6, 9);
			itx.fillRect(498, 24, 3, 3);
			itx.fillRect(507, 24, 3, 3);
			itx.fillRect(513, 18, 6, 9);
			itx.fillRect(486, 27, 3, 3);
			itx.fillRect(519, 27, 3, 3);
			itx.fillRect(489, 30, 6, 9);
			itx.fillRect(513, 30, 6, 9);
			itx.fillRect(495, 33, 18, 6);
			itx.fillRect(498, 39, 12, 3);
		
			itx.fillRect(495, 48, 18, 3);
			itx.fillRect(489, 51, 6, 3);
			itx.fillRect(513, 51, 6, 3);
			itx.fillRect(486, 54, 3, 3);
			itx.fillRect(519, 54, 3, 3);
			itx.fillRect(483, 57, 3, 6);
			itx.fillRect(522, 57, 3, 6);
			itx.fillRect(480, 63, 3, 18);
			itx.fillRect(525, 63, 3, 18);
			itx.fillRect(483, 81, 3, 6);
			itx.fillRect(522, 81, 3, 6);
			itx.fillRect(486, 87, 3, 3);
			itx.fillRect(519, 87, 3, 3);
			itx.fillRect(489, 90, 6, 3);
			itx.fillRect(513, 90, 6, 3);
			itx.fillRect(495, 93, 18, 3);
			
			itx.fillRect(501, 96, 6, 3);
			itx.fillRect(498, 99, 3, 3);
			itx.fillRect(507, 99, 3, 3);
			itx.fillRect(495, 105, 3, 30);
			itx.fillRect(510, 105, 3, 30);
			itx.fillRect(492, 114, 3, 12);
			itx.fillRect(513, 114, 3, 12);
			itx.fillRect(498, 120, 3, 3);
			itx.fillRect(507, 120, 3, 3);
			itx.fillRect(498, 126, 3, 6);
			itx.fillRect(507, 126, 3, 6);
			itx.fillRect(495, 129, 18, 6);
			itx.fillRect(498, 138, 12, 3);
			itx.fillRect(501, 135, 6, 9);
			
			itx.fillStyle="#404040";
			itx.fillRect(495, 3, 18, 3);
			itx.fillRect(489, 6, 6, 3);
			itx.fillRect(513, 6, 6, 3);
			itx.fillRect(486, 9, 6, 3);
			itx.fillRect(516, 9, 6, 3);
			itx.fillRect(486, 12, 3, 3);
			itx.fillRect(519, 12, 3, 3);
			itx.fillRect(483, 15, 3, 18);
			itx.fillRect(489, 15, 3, 3);
			itx.fillRect(516, 15, 3, 3);
			itx.fillRect(522, 15, 3, 18);
			itx.fillRect(492, 18, 3, 3);
			itx.fillRect(498, 18, 3, 6);
			itx.fillRect(507, 18, 3, 6);
			itx.fillRect(513, 18, 3, 3);
			itx.fillRect(495, 21, 3, 6);
			itx.fillRect(510, 21, 3, 6);
			itx.fillRect(486, 33, 3, 3);
			itx.fillRect(519, 33, 3, 3);
			itx.fillRect(486, 36, 6, 3);
			itx.fillRect(516, 36, 6, 3);
			itx.fillRect(489, 39, 6, 3);
			itx.fillRect(513, 39, 6, 3);
			itx.fillRect(495, 42, 18, 3);
			
			itx.fillRect(501, 99, 6, 3);
			itx.fillRect(498, 102, 3, 6);
			itx.fillRect(507, 102, 3, 6);
			itx.fillRect(495, 111, 3, 18);
			itx.fillRect(510, 111, 3, 18);
			itx.fillRect(498, 114, 3, 6);
			itx.fillRect(507, 114, 3, 6);
			itx.fillRect(498, 132, 3, 3);
			itx.fillRect(507, 132, 3, 3);
			itx.fillRect(501, 138, 6, 3);
			
			itx.fillStyle="#808080";
			itx.fillRect(486, 30, 3, 3);
			itx.fillRect(519, 30, 3, 3);
			itx.fillRect(495, 39, 3, 3);
			itx.fillRect(510, 39, 3, 3);
			
			itx.drawImage(tilePics, 483, 3, 42, 42, 483, 51, 42, 42);
	
	//Numbers
		itx.fillStyle="#404040";
		//0
			itx.fillRect(534, 12, 12, 6);
			itx.fillRect(531, 15, 6, 18);
			itx.fillRect(543, 15, 6, 18);
			itx.fillRect(534, 30, 12, 6);
		//1
			itx.fillRect(561, 12, 6, 18);
			itx.fillRect(558, 15, 3, 6);
			itx.fillRect(558, 30, 12, 6);
		//2
			itx.fillRect(582, 12, 12, 6);
			itx.fillRect(579, 15, 6, 6);
			itx.fillRect(591, 15, 6, 9);
			itx.fillRect(588, 21, 6, 6);
			itx.fillRect(585, 24, 6, 6);
			itx.fillRect(582, 27, 3, 3);
			itx.fillRect(579, 30, 18, 6);
		//3
			itx.fillRect(606, 12, 12, 6);
			itx.fillRect(603, 15, 6, 6);
			itx.fillRect(615, 15, 6, 18);
			itx.fillRect(609, 21, 6, 6);
			itx.fillRect(603, 27, 6, 6);
			itx.fillRect(606, 30, 12, 6);
		//4
			itx.fillRect(627, 12, 6, 12);
			itx.fillRect(636, 15, 6, 21);
			itx.fillRect(627, 24, 18, 6);
		//5
			itx.fillRect(651, 12, 18, 6);
			itx.fillRect(651, 18, 6, 6);
			itx.fillRect(657, 21, 9, 3);
			itx.fillRect(663, 24, 6, 9);
			itx.fillRect(651, 27, 6, 6);
			itx.fillRect(654, 30, 12, 6);
		//6
			itx.fillRect(678, 12, 12, 6);
			itx.fillRect(675, 15, 6, 18);
			itx.fillRect(690, 15, 3, 3);
			itx.fillRect(681, 21, 9, 6);
			itx.fillRect(687, 24, 6, 9);
			itx.fillRect(678, 30, 12, 6);
		//7
			itx.fillRect(699, 12, 18, 6);
			itx.fillRect(699, 18, 6, 3);
			itx.fillRect(711, 18, 6, 6);
			itx.fillRect(708, 21, 6, 9);
			itx.fillRect(705, 27, 6, 9);
		//8
			itx.fillRect(726, 12, 12, 6);
			itx.fillRect(723, 15, 6, 18);
			itx.fillRect(735, 15, 6, 18);
			itx.fillRect(729, 21, 6, 6);
			itx.fillRect(726, 30, 12, 6);
		//9
			itx.fillRect(750, 12, 12, 6);
			itx.fillRect(747, 15, 6, 9);
			itx.fillRect(759, 15, 6, 18);
			itx.fillRect(750, 21, 9, 6);
			itx.fillRect(747, 30, 3, 3);
			itx.fillRect(750, 30, 12, 6);
		
		//1
			itx.fillStyle="#a0b0a8";
			itx.fillRect(534, 57, 12, 3);
			itx.fillRect(531, 60, 3, 12);
			itx.fillRect(531, 75, 18, 12);
			
			itx.fillRect(534, 105, 9, 30);
			
			itx.fillStyle="#404040";
			itx.fillRect(537, 108, 3, 24);
			
			itx.drawImage(tilePics, 558, 12, 12, 24, 534, 60, 12, 24);
			
			itx.fillStyle="#f8f8f8";
			itx.fillRect(537, 57, 6, 3);
			itx.fillRect(534, 60, 3, 3);
			itx.fillRect(543, 60, 3, 18);
			itx.fillRect(531, 63, 3, 6);
			itx.fillRect(534, 69, 3, 9);
			itx.fillRect(531, 78, 3, 6);
			itx.fillRect(546, 78, 3, 6);
			itx.fillRect(534, 84, 12, 3);
			
			itx.fillRect(537, 105, 3, 3);
			itx.fillRect(534, 108, 3, 24);
			itx.fillRect(540, 108, 3, 24);
			itx.fillRect(537, 132, 3, 3);
		//2
			itx.fillStyle="#a0b0a8";
			itx.fillRect(555, 57, 18, 3);
			itx.fillRect(552, 60, 24, 12);
			itx.fillRect(555, 72, 21, 3);
			itx.fillRect(552, 75, 24, 12);
			
			itx.fillRect(558, 105, 12, 30);
			
			itx.fillStyle="#404040";
			itx.fillRect(561, 108, 6, 24);
			
			itx.drawImage(tilePics, 579, 12, 18, 24, 555, 60, 18, 24);
			
			itx.fillStyle="#f8f8f8";
			itx.fillRect(558, 57, 12, 3);
			itx.fillRect(555, 60, 3, 3);
			itx.fillRect(570, 60, 3, 3);
			itx.fillRect(552, 63, 3, 6);
			itx.fillRect(573, 63, 3, 9);
			itx.fillRect(561, 66, 6, 3);
			itx.fillRect(555, 69, 9, 3);
			itx.fillRect(558, 72, 3, 3);
			itx.fillRect(570, 72, 3, 6);
			itx.fillRect(555, 75, 3, 3);
			itx.fillRect(567, 75, 3, 3);
			itx.fillRect(552, 78, 3, 6);
			itx.fillRect(573, 78, 3, 6);
			itx.fillRect(555, 84, 18, 3);
			
			itx.fillRect(561, 105, 6, 3);
			itx.fillRect(558, 108, 3, 6);
			itx.fillRect(567, 108, 3, 12);
			itx.fillRect(561, 114, 3, 6);
			itx.fillRect(564, 123, 3, 3);
			itx.fillRect(558, 126, 3, 6);
			itx.fillRect(567, 129, 3, 3);
			itx.fillRect(561, 132, 6, 3);
		//3
			itx.fillStyle="#a0b0a8";
			itx.fillRect(579, 57, 18, 30);
			itx.fillRect(576, 60, 24, 24);
			
			itx.fillRect(582, 105, 12, 30);
			
			itx.fillStyle="#404040";
			itx.fillRect(585, 108, 6, 24);
			
			itx.drawImage(tilePics, 603, 12, 18, 24, 579, 60, 18, 24);
			
			itx.fillStyle="#f8f8f8";
			itx.fillRect(582, 57, 12, 3);
			itx.fillRect(579, 60, 3, 3);
			itx.fillRect(594, 60, 3, 3);
			itx.fillRect(576, 63, 3, 6);
			itx.fillRect(597, 63, 3, 18);
			itx.fillRect(585, 66, 6, 3);
			itx.fillRect(579, 69, 6, 6);
			itx.fillRect(576, 75, 3, 6);
			itx.fillRect(585, 75, 6, 3);
			itx.fillRect(579, 81, 3, 3);
			itx.fillRect(594, 81, 3, 3);
			itx.fillRect(582, 84, 12, 3);
			
			itx.fillRect(585, 105, 6, 3);
			itx.fillRect(582, 108, 3, 6);
			itx.fillRect(591, 108, 3, 24);
			itx.fillRect(585, 114, 3, 3);
			itx.fillRect(585, 123, 3, 3);
			itx.fillRect(582, 126, 3, 6);
			itx.fillRect(585, 132, 6, 3);
	
	//Big Numbers
		//0
			itx.fillStyle="#a0c0b0";
			itx.fillRect(6, 403, 36, 18);
			itx.fillRect(3, 406, 18, 60);
			itx.fillRect(27, 406, 18, 60);
			itx.fillRect(6, 451, 36, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(9, 406, 30, 12);
			itx.fillRect(6, 409, 12, 54);
			itx.fillRect(30, 409, 12, 54);
			itx.fillRect(9, 454, 30, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(9, 406, 3, 3);
			itx.fillRect(36, 406, 3, 3);
			itx.fillRect(6, 409, 3, 3);
			itx.fillRect(39, 409, 3, 3);
			itx.fillRect(6, 460, 3, 3);
			itx.fillRect(39, 460, 3, 3);
			itx.fillRect(9, 463, 3, 3);
			itx.fillRect(36, 463, 3, 3);
		
		//1
			itx.fillStyle="#a0c0b0";
			itx.fillRect(63, 403, 18, 48);
			itx.fillRect(60, 406, 3, 21);
			itx.fillRect(57, 409, 3, 18);
			itx.fillRect(60, 451, 24, 3);
			itx.fillRect(57, 454, 30, 15);
			
			itx.fillStyle="#404040";
			itx.fillRect(66, 406, 12, 51);
			itx.fillRect(60, 412, 6, 12);
			itx.fillRect(60, 457, 24, 9);
			
			itx.fillStyle="#808080";
			itx.fillRect(63, 409, 3, 3);
			itx.fillRect(63, 454, 3, 3);
			itx.fillRect(78, 454, 3, 3);
		
		//2
			itx.fillStyle="#a0c0b0";
			itx.fillRect(102, 403, 36, 18);
			itx.fillRect(99, 406, 18, 21);
			itx.fillRect(123, 406, 18, 36);
			itx.fillRect(102, 427, 36, 18);
			itx.fillRect(99, 430, 18, 39);
			itx.fillRect(117, 451, 24, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(105, 406, 30, 12);
			itx.fillRect(102, 409, 12, 15);
			itx.fillRect(126, 409, 12, 30);
			itx.fillRect(105, 430, 30, 12);
			itx.fillRect(102, 433, 12, 33);
			itx.fillRect(114, 454, 24, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(105, 406, 3, 3);
			itx.fillRect(132, 406, 3, 3);
			itx.fillRect(102, 409, 3, 3);
			itx.fillRect(135, 409, 3, 3);
			itx.fillRect(105, 430, 3, 3);
			itx.fillRect(102, 433, 3, 3);
			itx.fillRect(135, 436, 3, 3);
			itx.fillRect(132, 439, 3, 3);
		
		//3
			itx.fillStyle="#a0c0b0";
			itx.fillRect(150, 403, 36, 18);
			itx.fillRect(147, 406, 18, 21);
			itx.fillRect(171, 406, 18, 60);
			itx.fillRect(159, 427, 12, 18);
			itx.fillRect(147, 445, 18, 21);
			itx.fillRect(150, 451, 36, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(153, 406, 30, 12);
			itx.fillRect(150, 409, 12, 15);
			itx.fillRect(174, 409, 12, 24);
			itx.fillRect(162, 430, 21, 12);
			itx.fillRect(174, 439, 12, 24);
			itx.fillRect(150, 448, 12, 15);
			itx.fillRect(153, 454, 30, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(153, 406, 3, 3);
			itx.fillRect(180, 406, 3, 3);
			itx.fillRect(150, 409, 3, 3);
			itx.fillRect(183, 409, 3, 3);
			itx.fillRect(183, 430, 3, 3);
			itx.fillRect(180, 433, 3, 6);
			itx.fillRect(183, 439, 3, 3);
			itx.fillRect(150, 460, 3, 3);
			itx.fillRect(183, 460, 3, 3);
			itx.fillRect(153, 463, 3, 3);
			itx.fillRect(180, 463, 3, 3);
		
		//4
			itx.fillStyle="#a0c0b0";
			itx.fillRect(195, 403, 18, 42);
			itx.fillRect(219, 403, 18, 66);
			itx.fillRect(213, 427, 6, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(198, 406, 12, 36);
			itx.fillRect(222, 406, 12, 60);
			itx.fillRect(210, 430, 12, 12);
		
		//5
			itx.fillStyle="#a0c0b0";
			itx.fillRect(243, 403, 42, 18);
			itx.fillRect(243, 421, 18, 45);
			itx.fillRect(261, 427, 21, 18);
			itx.fillRect(267, 430, 18, 36);
			itx.fillRect(246, 451, 36, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(246, 406, 36, 12);
			itx.fillRect(246, 418, 12, 12);
			itx.fillRect(246, 430, 33, 12);
			itx.fillRect(270, 433, 12, 30);
			itx.fillRect(246, 448, 12, 15);
			itx.fillRect(249, 454, 30, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(276, 430, 3, 3);
			itx.fillRect(279, 433, 3, 3);
			itx.fillRect(246, 460, 3, 3);
			itx.fillRect(279, 460, 3, 3);
			itx.fillRect(249, 463, 3, 3);
			itx.fillRect(276, 463, 3, 3);
		
		//6
			itx.fillStyle="#a0c0b0";
			itx.fillRect(294, 403, 36, 18);
			itx.fillRect(291, 406, 18, 60);
			itx.fillRect(315, 406, 18, 21);
			itx.fillRect(309, 427, 21, 18);
			itx.fillRect(315, 430, 18, 36);
			itx.fillRect(294, 451, 36, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(297, 406, 30, 12);
			itx.fillRect(294, 409, 12, 54);
			itx.fillRect(318, 409, 12, 15);
			itx.fillRect(306, 430, 21, 12);
			itx.fillRect(318, 433, 12, 30);
			itx.fillRect(297, 454, 30, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(297, 406, 3, 3);
			itx.fillRect(324, 406, 3, 3);
			itx.fillRect(294, 409, 3, 3);
			itx.fillRect(327, 409, 3, 3);
			itx.fillRect(324, 430, 3, 3);
			itx.fillRect(327, 433, 3, 3);
			itx.fillRect(294, 460, 3, 3);
			itx.fillRect(327, 460, 3, 3);
			itx.fillRect(297, 463, 3, 3);
			itx.fillRect(324, 463, 3, 3);
		
		//7
			itx.fillStyle="#a0c0b0";
			itx.fillRect(339, 403, 42, 18);
			itx.fillRect(339, 421, 18, 6);
			itx.fillRect(360, 421, 21, 9);
			itx.fillRect(357, 427, 21, 9);
			itx.fillRect(354, 436, 21, 9);
			itx.fillRect(351, 445, 21, 9);
			itx.fillRect(351, 454, 18, 15);
			
			itx.fillStyle="#404040";
			itx.fillRect(342, 406, 36, 12);
			itx.fillRect(342, 418, 12, 6);
			itx.fillRect(366, 418, 12, 6);
			itx.fillRect(366, 424, 9, 6);
			itx.fillRect(363, 427, 9, 12);
			itx.fillRect(360, 433, 9, 15);
			itx.fillRect(357, 442, 9, 9);
			itx.fillRect(354, 451, 12, 15);
			
			itx.fillStyle="#808080";
			itx.fillRect(363, 424, 3, 3);
			itx.fillRect(375, 424, 3, 3);
			itx.fillRect(360, 430, 3, 3);
			itx.fillRect(372, 430, 3, 3);
			itx.fillRect(357, 439, 3, 3);
			itx.fillRect(369, 439, 3, 3);
			itx.fillRect(354, 448, 3, 3);
			itx.fillRect(366, 448, 3, 3);
		
		//8
			itx.fillStyle="#a0c0b0";
			itx.fillRect(390, 403, 36, 18);
			itx.fillRect(387, 406, 18, 60);
			itx.fillRect(411, 406, 18, 60);
			itx.fillRect(405, 427, 6, 18);
			itx.fillRect(390, 451, 36, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(393, 406, 30, 12);
			itx.fillRect(390, 409, 12, 24);
			itx.fillRect(414, 409, 12, 24);
			itx.fillRect(393, 430, 30, 12);
			itx.fillRect(390, 439, 12, 24);
			itx.fillRect(414, 439, 12, 24);
			itx.fillRect(393, 454, 30, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(393, 406, 3, 3);
			itx.fillRect(420, 406, 3, 3);
			itx.fillRect(390, 409, 3, 3);
			itx.fillRect(423, 409, 3, 3);
			itx.fillRect(390, 430, 3, 3);
			itx.fillRect(423, 430, 3, 3);
			itx.fillRect(393, 433, 3, 6);
			itx.fillRect(420, 433, 3, 6);
			itx.fillRect(390, 439, 3, 3);
			itx.fillRect(423, 439, 3, 3);
			itx.fillRect(390, 460, 3, 3);
			itx.fillRect(423, 460, 3, 3);
			itx.fillRect(393, 463, 3, 3);
			itx.fillRect(420, 463, 3, 3);
		
		//9
			itx.fillStyle="#a0c0b0";
			itx.fillRect(438, 403, 36, 18);
			itx.fillRect(435, 406, 18, 36);
			itx.fillRect(459, 406, 18, 60);
			itx.fillRect(438, 427, 21, 18);
			itx.fillRect(435, 445, 18, 21);
			itx.fillRect(438, 451, 36, 18);
			
			itx.fillStyle="#404040";
			itx.fillRect(441, 406, 30, 12);
			itx.fillRect(438, 409, 12, 30);
			itx.fillRect(462, 409, 12, 54);
			itx.fillRect(441, 430, 21, 12);
			itx.fillRect(438, 448, 12, 15);
			itx.fillRect(441, 454, 30, 12);
			
			itx.fillStyle="#808080";
			itx.fillRect(441, 406, 3, 3);
			itx.fillRect(468, 406, 3, 3);
			itx.fillRect(438, 409, 3, 3);
			itx.fillRect(471, 409, 3, 3);
			itx.fillRect(438, 436, 3, 3);
			itx.fillRect(441, 439, 3, 3);
			itx.fillRect(438, 460, 3, 3);
			itx.fillRect(471, 460, 3, 3);
			itx.fillRect(441, 463, 3, 3);
			itx.fillRect(468, 463, 3, 3);
	
	//Memo
		itx.fillStyle="#404040";
		itx.fillRect(3, 99, 156, 162);
		itx.fillRect(0, 102, 162, 156);
		itx.fillStyle="#906860";
		itx.fillRect(6, 102, 150, 156);
		itx.fillRect(3, 105, 156, 150);
		itx.fillStyle="#e89880";
		itx.fillRect(9, 105, 144, 150);
		itx.fillRect(6, 108, 150, 144);
		
		itx.fillStyle="#707070";
		itx.fillRect(9, 108, 144, 144);
		itx.fillStyle="#98b8b8";
		itx.fillRect(12, 111, 66, 66);
		itx.fillRect(84, 111, 66, 66);
		itx.fillRect(12, 183, 66, 66);
		itx.fillRect(84, 183, 66, 66);
		itx.fillStyle="#88a8a8";
		itx.fillRect(15, 114, 60, 60);
		itx.fillRect(87, 114, 60, 60);
		itx.fillRect(15, 186, 60, 60);
		itx.fillRect(87, 186, 60, 60);
		itx.fillStyle="#609060";
		itx.fillRect(36, 123, 18, 42);
		itx.fillRect(30, 126, 30, 36);
		itx.fillRect(27, 129, 36, 30);
		itx.fillRect(24, 135, 42, 18);
		itx.fillRect(114, 132, 6, 18);
		itx.fillRect(111, 135, 3, 6);
		itx.fillRect(111, 150, 12, 6);
		itx.fillRect(39, 204, 12, 6);
		itx.fillRect(36, 207, 6, 6);
		itx.fillRect(48, 207, 6, 9);
		itx.fillRect(45, 213, 6, 6);
		itx.fillRect(42, 216, 6, 6);
		itx.fillRect(39, 219, 3, 3);
		itx.fillRect(36, 222, 18, 6);
		itx.fillRect(111, 204, 12, 6);
		itx.fillRect(108, 207, 6, 6);
		itx.fillRect(120, 207, 6, 18);
		itx.fillRect(114, 213, 6, 6);
		itx.fillRect(108, 219, 6, 6);
		itx.fillRect(111, 222, 12, 6);
		
		itx.fillStyle="#404040";
		itx.fillRect(165, 108, 144, 144);
		itx.fillStyle="#28a068";
		itx.fillRect(168, 111, 66, 66);
		itx.fillRect(240, 111, 66, 66);
		itx.fillRect(168, 183, 66, 66);
		itx.fillRect(240, 183, 66, 66);
		itx.fillStyle="#188060";
		itx.fillRect(171, 114, 60, 60);
		itx.fillRect(243, 114, 60, 60);
		itx.fillRect(171, 186, 60, 60);
		itx.fillRect(243, 186, 60, 60);
		itx.fillStyle="#f8b830";
		itx.fillRect(192, 123, 18, 42);
		itx.fillRect(186, 126, 30, 36);
		itx.fillRect(183, 129, 36, 30);
		itx.fillRect(180, 135, 42, 18);
		itx.fillRect(270, 132, 6, 18);
		itx.fillRect(267, 135, 3, 6);
		itx.fillRect(267, 150, 12, 6);
		itx.fillRect(195, 204, 12, 6);
		itx.fillRect(192, 207, 6, 6);
		itx.fillRect(204, 207, 6, 9);
		itx.fillRect(201, 213, 6, 6);
		itx.fillRect(198, 216, 6, 6);
		itx.fillRect(195, 219, 3, 3);
		itx.fillRect(192, 222, 18, 6);
		itx.fillRect(267, 204, 12, 6);
		itx.fillRect(264, 207, 6, 6);
		itx.fillRect(276, 207, 6, 18);
		itx.fillRect(270, 213, 6, 6);
		itx.fillRect(264, 219, 6, 6);
		itx.fillRect(267, 222, 12, 6);
		
		itx.fillStyle="#f8f8f8";
		itx.fillRect(30, 138, 3, 9);
		itx.fillRect(57, 138, 3, 9);
		itx.fillRect(33, 141, 3, 6);
		itx.fillRect(54, 141, 3, 6);
		itx.fillRect(39, 144, 3, 3);
		itx.fillRect(48, 144, 3, 3);
		itx.fillRect(27, 147, 3, 6);
		itx.fillRect(60, 147, 3, 6);
		itx.fillRect(30, 150, 6, 6);
		itx.fillRect(54, 150, 6, 6);
		itx.fillRect(33, 153, 24, 6);
		itx.fillRect(39, 159, 12, 3);
		
		itx.fillRect(186, 138, 3, 9);
		itx.fillRect(213, 138, 3, 9);
		itx.fillRect(189, 141, 3, 6);
		itx.fillRect(210, 141, 3, 6);
		itx.fillRect(195, 144, 3, 3);
		itx.fillRect(204, 144, 3, 3);
		itx.fillRect(183, 147, 3, 6);
		itx.fillRect(216, 147, 3, 6);
		itx.fillRect(186, 150, 6, 6);
		itx.fillRect(210, 150, 6, 6);
		itx.fillRect(189, 153, 24, 6);
		itx.fillRect(195, 159, 12, 3);
	
	//Memos
		itx.fillStyle="#f8b830";
		//ttx.drawImage(tilePics, 0, 0, 72, 72, 312, 108, 72, 72);
		//Voltorb
			itx.fillRect(321, 114, 9, 15);
			itx.fillRect(318, 117, 15, 9);
		//1
			itx.fillRect(366, 114, 9, 3);
			itx.fillRect(369, 117, 6, 9);
			itx.fillRect(366, 126, 12, 3);
		//2
			itx.fillRect(318, 159, 12, 3);
			itx.fillRect(324, 162, 6, 6);
			itx.fillRect(318, 165, 6, 9);
			itx.fillRect(324, 171, 6, 3);
		//3
			itx.fillRect(366, 159, 6, 3);
			itx.fillRect(372, 159, 6, 15);
			itx.fillRect(366, 165, 6, 3);
			itx.fillRect(366, 171, 6, 3);
		//Selected Memo Tile
			itx.fillStyle = "#785820";
			itx.fillRect(3, 264, 78, 12);
			itx.fillRect(0, 267, 12, 78);
			itx.fillRect(72, 267, 12, 78);
			itx.fillRect(3, 336, 78, 12);
			
			itx.fillRect(351, 126, 6, 24);
			itx.fillRect(348, 129, 12, 18);
			itx.fillRect(345, 132, 18, 12);
			itx.fillRect(342, 135, 24, 6);
			itx.fillRect(339, 138, 15, 15);
			itx.fillRect(336, 141, 15, 15);
			itx.fillRect(333, 144, 15, 15);
			
			itx.fillStyle = "#f8b830";
			itx.fillRect(6, 267, 72, 6);
			itx.fillRect(3, 270, 6, 72);
			itx.fillRect(75, 270, 6, 72);
			itx.fillRect(6, 339, 72, 6);
			
			itx.fillRect(351, 129, 6, 18);
			itx.fillRect(348, 132, 12, 12);
			itx.fillRect(345, 135, 18, 6);
			itx.fillRect(342, 138, 15, 9);
			itx.fillRect(339, 141, 3, 3);
			itx.fillRect(345, 147, 9, 3);
			itx.fillRect(348, 150, 3, 3);
			itx.fillRect(336, 144, 3, 12);
			itx.fillRect(339, 147, 3, 9);
			itx.fillRect(342, 150, 3, 6);
			itx.fillRect(345, 153, 3, 3);
		
		//Selected Tile
			itx.fillStyle = "#683028";
			itx.fillRect(87, 264, 78, 9);
			itx.fillRect(84, 267, 9, 78);
			itx.fillRect(159, 267, 9, 78);
			itx.fillRect(87, 339, 78, 9);
			itx.fillStyle = "#f84030";
			itx.fillRect(90, 267, 72, 6);
			itx.fillRect(87, 270, 6, 72);
			itx.fillRect(159, 270, 6, 72);
			itx.fillRect(90, 339, 72, 6);
	
	//Memo Open/Close Text
		itx.fillStyle="#383838";
		//Open
			itx.fillRect(315, 180, 15, 9);
			itx.fillRect(312, 183, 9, 27);
			itx.fillRect(324, 183, 9, 27);
			itx.fillRect(315, 204, 15, 9);
			
			itx.fillRect(333, 189, 18, 9);
			itx.fillRect(333, 198, 9, 21);
			itx.fillRect(342, 201, 9, 9);
			itx.fillRect(345, 192, 9, 15);
			
			itx.fillRect(354, 192, 21, 18);
			itx.fillRect(357, 189, 15, 21);
			itx.fillRect(357, 210, 18, 3);
			
			itx.fillRect(375, 189, 18, 12);
			itx.fillRect(375, 201, 9, 12);
			itx.fillRect(387, 192, 9, 21);
		//Close
			itx.fillRect(315, 219, 15, 9);
			itx.fillRect(312, 222, 9, 27);
			itx.fillRect(324, 222, 9, 12);
			itx.fillRect(324, 237, 9, 12);
			itx.fillRect(315, 243, 15, 9);
			
			itx.fillRect(333, 219, 12, 9);
			itx.fillRect(336, 228, 9, 24);
			
			itx.fillRect(351, 228, 15, 9);
			itx.fillRect(348, 231, 9, 18);
			itx.fillRect(360, 231, 12, 18);
			itx.fillRect(351, 243, 15, 9);
			
			itx.fillRect(372, 228, 18, 21);
			itx.fillRect(372, 249, 15, 3);
			
			itx.fillRect(390, 231, 21, 18);
			itx.fillRect(393, 228, 15, 3);
			itx.fillRect(393, 249, 18, 3);
		
		itx.fillStyle="#f8f8f8";
		//Open
			itx.fillRect(318, 183, 9, 3);
			itx.fillRect(315, 186, 3, 21);
			itx.fillRect(327, 186, 3, 21);
			itx.fillRect(318, 207, 9, 3);
			
			itx.fillRect(336, 192, 3, 24);
			itx.fillRect(339, 192, 9, 3);
			itx.fillRect(348, 195, 3, 9);
			itx.fillRect(339, 204, 9, 3);
			
			itx.fillRect(360, 192, 9, 3);
			itx.fillRect(357, 195, 3, 12);
			itx.fillRect(369, 195, 3, 9);
			itx.fillRect(360, 201, 9, 3);
			itx.fillRect(360, 207, 12, 3);
			
			itx.fillRect(378, 192, 3, 18);
			itx.fillRect(381, 195, 3, 3);
			itx.fillRect(384, 192, 6, 3);
			itx.fillRect(390, 195, 3, 15);
		//Close
			itx.fillRect(318, 222, 9, 3);
			itx.fillRect(315, 225, 3, 21);
			itx.fillRect(327, 225, 3, 6);
			itx.fillRect(327, 240, 3, 6);
			itx.fillRect(318, 246, 9, 3);
			
			itx.fillRect(336, 222, 6, 3);
			itx.fillRect(339, 225, 3, 24);
			
			itx.fillRect(354, 231, 9, 3);
			itx.fillRect(351, 234, 3, 12);
			itx.fillRect(363, 234, 3, 12);
			itx.fillRect(354, 246, 9, 3);
			
			itx.fillRect(375, 231, 12, 3);
			itx.fillRect(372, 234, 3, 3);
			itx.fillRect(375, 237, 9, 3);
			itx.fillRect(384, 240, 3, 6);
			itx.fillRect(375, 246, 9, 3);
			itx.fillRect(372, 243, 3, 3);
			
			itx.fillRect(396, 231, 9, 3);
			itx.fillRect(393, 234, 3, 12);
			itx.fillRect(405, 234, 3, 9);
			itx.fillRect(396, 240, 9, 3);
			itx.fillRect(396, 246, 12, 3);
	
	//TextBox
		itx.fillStyle = "#494141";
		itx.fillRect(9, 501, 750, 132);
		itx.fillRect(6, 495, 12, 24);
		itx.fillRect(3, 498, 24, 12);
		itx.fillRect(750, 495, 12, 24);
		itx.fillRect(741, 498, 24, 12);
		itx.fillRect(6, 615, 12, 24);
		itx.fillRect(3, 624, 24, 12);
		itx.fillRect(750, 615, 12, 24);
		itx.fillRect(741, 624, 24, 12);

		itx.fillStyle = "#ff5159";
		itx.fillRect(12, 498, 3, 3);
		itx.fillRect(6, 501, 12, 3);
		itx.fillRect(756, 498, 3, 3);
		itx.fillRect(750, 501, 12, 3);
		itx.fillRect(12, 624, 3, 3);
		itx.fillRect(6, 627, 12, 3);
		itx.fillRect(756, 624, 3, 3);
		itx.fillRect(750, 627, 12, 3);

		itx.fillStyle = "#ffa6b6";
		itx.fillRect(9, 498, 3, 3);
		itx.fillRect(753, 498, 3, 3);
		itx.fillRect(9, 624, 3, 3);
		itx.fillRect(753, 624, 3, 3);
	
		itx.fillStyle = "#08cf49";
		itx.fillRect(21, 501, 3, 9);
		itx.fillRect(18, 507, 3, 6);
		itx.fillRect(15, 510, 3, 6);
		itx.fillRect(9, 513, 6, 3);
		itx.fillRect(744, 501, 3, 9);
		itx.fillRect(747, 507, 3, 6);
		itx.fillRect(750, 510, 3, 6);
		itx.fillRect(753, 513, 6, 3);
		itx.fillRect(9, 618, 6, 3);
		itx.fillRect(15, 618, 3, 6);
		itx.fillRect(18, 621, 3, 6);
		itx.fillRect(21, 624, 3, 9);
		itx.fillRect(753, 618, 6, 3);
		itx.fillRect(750, 618, 3, 6);
		itx.fillRect(747, 621, 3, 6);
		itx.fillRect(744, 624, 3, 9);
		
		itx.fillStyle = "#4971ff";
		itx.fillRect(27, 504, 714, 3);
		itx.fillRect(12, 519, 3, 96);
		itx.fillRect(753, 519, 3, 96);
		itx.fillRect(27, 627, 714, 3);

		itx.fillStyle = "#ff8600";
		itx.fillRect(24, 510, 720, 114);
		itx.fillRect(21, 513, 726, 108);
		itx.fillRect(18, 516, 732, 102);

		itx.fillStyle = "#ffe718";
		itx.fillRect(30, 510, 684, 114);

		itx.fillStyle = "#ffffff";
		itx.fillRect(6, 504, 12, 3);
		itx.fillRect(9, 507, 6, 3);
		itx.fillRect(750, 504, 12, 3);
		itx.fillRect(753, 507, 6, 3);
		itx.fillRect(6, 630, 12, 3);
		itx.fillRect(9, 633, 6, 3);
		itx.fillRect(750, 630, 12, 3);
		itx.fillRect(753, 633, 6, 3);

		itx.fillRect(39, 510, 666, 114);

	//Cursor
		itx.fillStyle = "#616161";
		itx.fillRect(729, 450, 21, 21);
		itx.fillRect(726, 453, 27, 12);
		itx.fillRect(753, 456, 3, 9);
		itx.fillRect(750, 465, 3, 6);
		itx.fillRect(732, 471, 18, 6);
		itx.fillRect(735, 477, 12, 3);
		itx.fillRect(738, 480, 6, 3);

		itx.fillStyle = "#96969e";
		itx.fillRect(729, 459, 21, 3);
		itx.fillRect(732, 465, 15, 3);
		itx.fillRect(735, 471, 9, 3);

		itx.fillStyle = "#c7c7cf";
		itx.fillRect(732, 459, 15, 6);
		itx.fillRect(735, 465, 9, 6);
		itx.fillRect(738, 471, 3, 6);

		itx.fillStyle = "#ffffff";
		itx.fillRect(729, 453, 21, 6);
		itx.fillRect(735, 459, 9, 3);
	
	//Coin Counters
		itx.fillStyle="#404040";
		itx.fillRect(21, 756, 726, 114);
		itx.fillRect(18, 759, 732, 108);
		itx.fillRect(15, 762, 738, 102);
		itx.fillStyle="#a0c0b0";
		itx.fillRect(21, 759, 726, 108);
		itx.fillRect(18, 762, 732, 102);
		itx.fillStyle="#f8f8f8";
		itx.fillRect(27, 765, 714, 96);
		itx.fillRect(24, 768, 720, 90);
	
	//Coin Text
		itx.fillStyle="#000000";
		itx.drawImage(ttc, 225, 180, 81, 45, 174, 261, 81, 45);
		itx.drawImage(ttc, 225, 180, 36, 45, 267, 261, 36, 45);
		itx.drawImage(ttc, 198, 45, 18, 45, 303, 261, 18, 45);
		itx.drawImage(ttc, 198, 45, 18, 45, 315, 261, 18, 45);
		itx.drawImage(ttc, 72, 45, 18, 45, 327, 261, 18, 45);
		itx.drawImage(ttc, 36, 45, 18, 45, 345, 261, 18, 45);
		itx.drawImage(ttc, 342, 45, 18, 45, 363, 261, 18, 45);
		itx.drawImage(ttc, 72, 45, 18, 45, 381, 261, 18, 45);
		itx.drawImage(ttc, 54, 45, 18, 45, 399, 261, 18, 45);
		itx.drawImage(ttc, 144, 45, 18, 45, 429, 261, 18, 45);
		itx.drawImage(ttc, 234, 45, 18, 45, 438, 261, 18, 45);
		itx.drawImage(ttc, 36, 0, 18, 45, 210, 309, 18, 45);
		itx.drawImage(ttc, 360, 45, 18, 45, 228, 309, 18, 45);
		itx.drawImage(ttc, 306, 45, 18, 45, 246, 309, 18, 45);
		itx.drawImage(ttc, 306, 45, 18, 45, 264, 309, 18, 45);
		itx.drawImage(ttc, 72, 45, 18, 45, 282, 309, 18, 45);
		itx.drawImage(ttc, 234, 45, 18, 45, 300, 309, 18, 45);
		itx.drawImage(ttc, 342, 45, 18, 45, 318, 309, 18, 45);
		itx.drawImage(ttc, 186, 270, 72, 45, 348, 309, 72, 45);
		
		itx.drawImage(ttc, 432, 0, 18, 45, 582, 261, 18, 45);
		itx.drawImage(ttc, 252, 45, 18, 45, 600, 261, 18, 45);
		itx.drawImage(ttc, 360, 45, 18, 45, 618, 261, 18, 45);
		itx.drawImage(ttc, 306, 45, 18, 45, 636, 261, 18, 45);
		itx.drawImage(tilePics, 267, 261, 150, 45, 498, 309, 150, 45);
		itx.drawImage(ttc, 225, 180, 81, 45, 660, 309, 81, 45);
	
	//Background
	btx.fillStyle="#188060";
	btx.fillRect(0, 0, 768, 840);
	btx.fillStyle = "#28a068";
	btx.fillRect(18, 9, 732, 822);
	btx.fillRect(12, 12, 744, 816);
	btx.fillRect(9, 18, 750, 804);
	
	count = 0;
	while (count < 6) {
		count2 = 0;
		while (count2 < 6) {
			btx.fillStyle = "#188060";
			btx.fillRect(18 + 96 * count2, 18 + 96 * count, 84, 84);
			btx.fillRect(21 + 96 * count2, 102 + 96 * count, 78, 3);
			btx.fillStyle="#d0e8e0";
			btx.fillRect(21 + 96 * count2, 18 + 96 * count, 78, 84);
			btx.fillRect(18 + 96 * count2, 21 + 96 * count, 84, 78);
			if (count2 < 5 && count < 5) {
				btx.fillStyle = "#188060";
				btx.fillRect(102 + 96 * count2, 69 + 96 * count, 12, 3);
				btx.fillStyle="#d0e8e0";
				btx.fillRect(102 + 96 * count2, 51 + 96 * count, 12, 18);
				btx.fillRect(51 + 96 * count2, 102 + 96 * count, 18, 12);
			}
			count2 += 1;
			if (count == 5 && count2 == 5) count2 += 1;
		}
		count += 1;
	}
	
	count = 0;
	while (count < 6) {
		count2 = 0;
		while (count2 < 6) {
			if (count == 5) btx.fillStyle = colours[4];
			else btx.fillStyle = colours[count];
			if (count < 5 && count2 < 5) btx.fillRect(99 + 96 * count2, 54 + 96 * count, 18, 12);
			else if (count < 5){
				btx.fillRect(504, 24 + 96 * count, 72, 24);
				btx.fillRect(504, 54 + 96 * count, 72, 42);
				btx.drawImage(tilePics, 483, 3, 42, 42, 507, 54 + 96 * count, 42, 42);
			}
			if (count2 == 5) btx.fillStyle = colours[4];
			else btx.fillStyle = colours[count2];
			if (count < 5 && count2 < 5) btx.fillRect(54 + 96 * count2, 99 + 96 * count, 12, 18);
			else if (count2 < 5){
				btx.fillRect(24 + 96 * count2, 504, 72, 24);
				btx.fillRect(24 + 96 * count2, 534, 72, 42);
				btx.drawImage(tilePics, 483, 3, 42, 42, 27 + 96 * count2, 534, 42, 42);
			}
			count2 += 1;
			if (count == 5 && count2 == 5) count2 += 1;
		}
		count += 1;
	}
	
	//Memo
		btx.fillStyle = "#404040";
		btx.fillRect(597, 18, 150, 123);
		btx.fillRect(594, 21, 156, 117);
		btx.fillRect(591, 24, 162, 111);
		btx.fillStyle = "#188060";
		btx.fillRect(600, 24, 144, 111);
		btx.fillRect(597, 27, 150, 105);
		btx.fillStyle = "#f8f8f8";
		btx.fillRect(603, 27, 138, 105);
		btx.fillRect(600, 30, 144, 99);
		btx.fillStyle = "#e0e0e0";
		btx.fillRect(600, 75, 144, 6);
		btx.fillStyle = "#c8c8c8";
		btx.fillRect(600, 81, 144, 6);
		btx.fillStyle = "#a8a8a8";
		btx.fillRect(600, 87, 144, 42);
		btx.fillRect(603, 129, 138, 3);
	
	//Memo Text
		btx.fillStyle = "#383838";
		btx.fillRect(630, 87, 9, 33);
		btx.fillRect(639, 93, 3, 18);
		btx.fillRect(642, 87, 9, 33);
		btx.fillRect(654, 96, 15, 21);
		btx.fillRect(651, 99, 21, 18);
		btx.fillRect(654, 117, 18, 3);
		btx.fillRect(672, 96, 18, 24);
		btx.fillRect(690, 99, 3, 21);
		btx.fillRect(696, 96, 15, 9);
		btx.fillRect(693, 99, 9, 18);
		btx.fillRect(705, 99, 9, 18);
		btx.fillRect(696, 111, 15, 9);
		btx.fillStyle = "#f8f8f8";
		btx.fillRect(633, 90, 3, 27);
		btx.fillRect(636, 96, 3, 6);
		btx.fillRect(639, 102, 3, 6);
		btx.fillRect(642, 96, 3, 6);
		btx.fillRect(645, 90, 3, 27);
		btx.fillRect(657, 99, 9, 3);
		btx.fillRect(654, 102, 3, 12);
		btx.fillRect(666, 102, 3, 9);
		btx.fillRect(657, 108, 9, 3);
		btx.fillRect(657, 114, 12, 3);
		btx.fillRect(675, 99, 12, 3);
		btx.fillRect(675, 102, 3, 15);
		btx.fillRect(681, 102, 3, 15);
		btx.fillRect(687, 102, 3, 15);
		btx.fillRect(699, 99, 9, 3);
		btx.fillRect(696, 102, 3, 12);
		btx.fillRect(708, 102, 3, 12);
		btx.fillRect(699, 114, 9, 3);
}