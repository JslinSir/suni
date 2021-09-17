import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, computed, Fragment, createElementVNode, mergeProps, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, toDisplayString, vShow, createApp, nextTick, resolveComponent, withKeys, withModifiers, renderList } from 'vue';

var colorString$1 = {exports: {}};

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var simpleSwizzle = {exports: {}};

var isArrayish$1 = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var isArrayish = isArrayish$1;

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle$1 = simpleSwizzle.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle$1.wrap = function (fn) {
	return function () {
		return fn(swizzle$1(arguments));
	};
};

/* MIT license */

var colorNames = colorName;
var swizzle = simpleSwizzle.exports;

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = colorString$1.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}

/* MIT license */

/* eslint-disable no-mixed-operators */
const cssKeywords = colorName;

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert$2 = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

var conversions$2 = convert$2;

// Hide .channels and .labels properties
for (const model of Object.keys(convert$2)) {
	if (!('channels' in convert$2[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert$2[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert$2[model].labels.length !== convert$2[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert$2[model];
	delete convert$2[model].channels;
	delete convert$2[model].labels;
	Object.defineProperty(convert$2[model], 'channels', {value: channels});
	Object.defineProperty(convert$2[model], 'labels', {value: labels});
}

convert$2.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert$2.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert$2.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert$2.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert$2.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert$2.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert$2.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert$2.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert$2.rgb.lab = function (rgb) {
	const xyz = convert$2.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$2.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert$2.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert$2.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert$2.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$2.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert$2.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert$2.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert$2.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$2.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert$2.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert$2.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert$2.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert$2.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
};

convert$2.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert$2.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert$2.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert$2.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$2.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert$2.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert$2.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert$2.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert$2.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert$2.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert$2.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert$2.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert$2.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert$2.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert$2.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert$2.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert$2.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert$2.gray.hsv = convert$2.gray.hsl;

convert$2.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert$2.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert$2.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert$2.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$2.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};

const conversions$1 = conversions$2;

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions$1);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions$1[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions$1[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions$1[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route$1 = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

const conversions = conversions$2;
const route = route$1;

const convert$1 = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert$1[fromModel] = {};

	Object.defineProperty(convert$1[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert$1[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert$1[fromModel][toModel] = wrapRounded(fn);
		convert$1[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert$1;

const colorString = colorString$1.exports;
const convert = colorConvert;

const _slice = [].slice;

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = object.color.slice();
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = colorString.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		const newArray = _slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const labels = convert[this.model].labels;
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array() {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object() {
		const result = {};
		const channels = convert[this.model].channels;
		const labels = convert[this.model].labels;

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha(value) {
		if (arguments.length > 0) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, value))), this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (arguments.length > 0) {
			return new Color(value);
		}

		return convert[this.model].keyword(this.color);
	},

	hex(value) {
		if (arguments.length > 0) {
			return new Color(value);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.039_28) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(convert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const channels = convert[model].channels;

	// Conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length > 0) {
			return new Color(arguments, model);
		}

		const newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (arguments.length > 0) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

var color = Color;

const isHEX = (color) => [4, 7].includes(color.trim().length) && /^#[0-9a-f]{3,6}$/.test(color.trim());
const isRGB = (color) => /^rgb\([0-9, ]*\)$/.test(color.trim());
const isHSL = (color) => /^hsl\([0-9%, ]*\)$/.test(color.trim());
const isColor = (color) => {
  if (!color)
    return false;
  return isHEX(color) || isRGB(color) || isHSL(color);
};
const getColor = (color$1) => {
  var _a;
  const hslArray = (_a = color(color$1)) == null ? void 0 : _a.hsl().array();
  const hslNumber = `${hslArray[0].toFixed()}, ${hslArray[1].toFixed()}%, ${hslArray[2].toFixed()}%`;
  return hslNumber;
};
const setColor = (colorName, color, el, addClass) => {
  const hslNumber = getColor(color);
  if (hslNumber) {
    el.style.setProperty(colorName, hslNumber);
    if (addClass)
      el.classList.add("si-change-color");
  }
};

function throttle(fn, time) {
  let flag = true;
  return function() {
    if (!flag)
      return;
    fn(...arguments);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, time);
  };
}

function ripple(event, solid = false) {
  const el = event.currentTarget;
  if (!el)
    return console.warn("[suni ripple]", "event no target");
  if (!(el instanceof HTMLElement))
    return console.warn("[suni ripple]", "ripple not HTMLELEMT");
  const offset = el.getBoundingClientRect();
  const x = event.clientX - offset.left;
  const y = event.clientY - offset.top;
  let time = 0.6;
  if (el.clientWidth > 150)
    time = 1.2;
  const effectContent = document.createElement("div");
  effectContent.className = "si-ripple-content";
  const effect = document.createElement("div");
  effect.className = "si-ripple";
  effect.style.transition = `all ${time}s ease`;
  effect.style.left = `${x}px`;
  effect.style.top = `${y}px`;
  if (solid)
    effect.classList.add("si-ripple--solid");
  else
    setColor("--si-color", "#fff", effectContent);
  effectContent.appendChild(effect);
  el.appendChild(effectContent);
  effect.style.width = `${el.clientWidth * 2.5}px`;
  effect.style.height = `${el.clientWidth * 2.5}px`;
  effect.style.opacity = `1`;
  let canRemove = false;
  const removeDeside = () => canRemove = true;
  const removeEffect = () => {
    const outTime = time * 0.4;
    effect.style.transition = `all ${outTime}s ease`;
    effect.style.opacity = "0";
    setTimeout(() => {
      el.removeChild(effectContent);
    }, outTime * 1e3);
    el.removeEventListener("mouseup", removeEffect);
    el.removeEventListener("mouseleave", removeEffect);
    el.removeEventListener("mouseup", removeDeside);
    el.removeEventListener("mouseleave", removeDeside);
  };
  el.addEventListener("mouseup", removeDeside);
  el.addEventListener("mouseleave", removeDeside);
  setTimeout(() => {
    if (canRemove) {
      removeEffect();
    } else {
      el.addEventListener("mouseup", removeEffect);
      el.addEventListener("mouseleave", removeEffect);
    }
  }, time * 1e3 * 0.5);
}

var script$j = defineComponent({
  name: "SiButton",
  props: {
    color: { type: String },
    type: { type: String, default: "primary" },
    variant: { type: String, default: "default" },
    active: { type: Boolean },
    disabled: { type: Boolean },
    block: { type: Boolean },
    circle: { type: Boolean },
    square: { type: Boolean },
    icon: { type: Boolean },
    size: { type: String, default: "default" },
    loading: { type: Boolean },
    upload: { type: Boolean },
    animationType: { type: String, default: "vertical" }
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    }
  },
  methods: {
    mousedown(event) {
      if (this.variant === "flat" || this.variant === "border") {
        ripple(event, true);
      } else {
        ripple(event);
      }
    }
  }
});

const _hoisted_1$g = ["disabled"];
const _hoisted_2$d = {
  key: 0,
  class: "si-button__content"
};
const _hoisted_3$b = {
  key: 2,
  class: "si-button__loading"
};
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["si-button", {
      [`si-button--${_ctx.type}`]: _ctx.type,
      [`si-button--${_ctx.variant}`]: _ctx.variant,
      active: _ctx.active,
      block: _ctx.block,
      circle: _ctx.circle,
      square: _ctx.square,
      icon: _ctx.icon,
      [`si-button--size-${_ctx.size}`]: _ctx.size,
      "si-button--loading": _ctx.loading,
      "si-button--upload": _ctx.upload,
      "si-button--animate": !!_ctx.$slots.animate,
      [`si-button--animate-${_ctx.animationType}`]: !!_ctx.$slots.animate
    }]),
    disabled: _ctx.disabled,
    style: normalizeStyle(_ctx.siColor),
    onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.mousedown && _ctx.mousedown(...args))
  }, [
    _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_2$d, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots.animate ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["si-button__animate", `si-button__animate--${_ctx.animationType}`])
    }, [
      renderSlot(_ctx.$slots, "animate")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_3$b)) : createCommentVNode("v-if", true)
  ], 46, _hoisted_1$g);
}

script$j.render = render$j;
script$j.__file = "src/components/siButton/index.vue";

const install$h = (app) => {
  app.component("si-button", script$j);
};
var index$h = { install: install$h };

var script$i = defineComponent({
  props: {
    type: String
  },
  provide() {
    return {
      groupType: computed(() => this.type)
    };
  }
});

const _hoisted_1$f = { class: "si-button-group" };
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$f, [
    renderSlot(_ctx.$slots, "default")
  ]);
}

script$i.render = render$i;
script$i.__file = "src/components/siButtonGroup/index.vue";

const install$g = (app) => {
  app.component("si-button-group", script$i);
};
var index$g = { install: install$g };

const getTooltipPosition = (content, position, offsetX, offsetY) => {
  const { x, y, width, height } = content.getBoundingClientRect();
  const style = {};
  if (position === "top") {
    style.bottom = `${window.innerHeight - y + 8 - offsetY}px`;
    style.left = `${x + width / 2 + offsetX}px`;
  } else if (position == "bottom") {
    style.top = `${y + height + 8}px`;
    style.left = `${x + width / 2}px`;
  } else if (position == "left") {
    style.top = `${y + height / 2}px`;
    style.right = `${window.innerWidth - x + 8}px`;
  } else if (position == "right") {
    style.top = `${y + height / 2}px`;
    style.left = `${x + width + 8}px`;
  } else {
    console.warn("[suni tooltip]", "position must one of ['top', 'bottom', 'left', 'right']");
  }
  return style;
};

var script$h = defineComponent({
  props: {
    position: { type: String, default: "top" },
    content: { type: String },
    color: { type: String },
    type: { type: String },
    variant: { type: String },
    circle: { type: Boolean },
    square: { type: Boolean },
    loading: { type: Boolean },
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: 0 }
  },
  data() {
    return {
      active: false,
      positionStyle: {}
    };
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    }
  },
  methods: {
    getPosition() {
      this.positionStyle = getTooltipPosition(this.$refs.content, this.position, this.offsetX, this.offsetY);
    },
    activeHandle() {
      this.getPosition();
      this.active = true;
      window.addEventListener("resize", this.getPosition);
      window.addEventListener("scroll", this.getPosition, true);
    },
    inactiveHandle() {
      this.active = false;
      window.removeEventListener("resize", this.getPosition);
      window.removeEventListener("scroll", this.getPosition, true);
    },
    mouseenter() {
      this.activeHandle();
    },
    mouseleave() {
      this.inactiveHandle();
    },
    focusin() {
      this.activeHandle();
    },
    focusout() {
      this.inactiveHandle();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.getPosition);
    window.removeEventListener("scroll", this.getPosition, true);
  }
});

const _hoisted_1$e = { key: 1 };
const _hoisted_2$c = {
  key: 2,
  class: "si-tooltip__loading"
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("span", mergeProps({
      onFocusin: _cache[0] || (_cache[0] = (...args) => _ctx.focusin && _ctx.focusin(...args)),
      onFocusout: _cache[1] || (_cache[1] = (...args) => _ctx.focusout && _ctx.focusout(...args)),
      onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.mouseenter && _ctx.mouseenter(...args)),
      onMouseleave: _cache[3] || (_cache[3] = (...args) => _ctx.mouseleave && _ctx.mouseleave(...args)),
      class: "si-tooltip-content"
    }, _ctx.$attrs, { ref: "content" }), [
      renderSlot(_ctx.$slots, "default")
    ], 16),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "si-tooltip" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref: "tooltip",
            class: normalizeClass(["si-tooltip", {
              [_ctx.position]: true,
              [`si-tooltip--${_ctx.type}`]: _ctx.type,
              [`si-tooltip--${_ctx.variant}`]: _ctx.variant,
              circle: _ctx.circle,
              square: _ctx.square,
              loading: _ctx.loading
            }]),
            style: normalizeStyle([_ctx.siColor, _ctx.positionStyle])
          }, [
            _ctx.$slots.tooltip ? renderSlot(_ctx.$slots, "tooltip", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_1$e, toDisplayString(_ctx.content), 1)),
            _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2$c)) : createCommentVNode("v-if", true)
          ], 6), [
            [vShow, _ctx.active]
          ])
        ]),
        _: 3
      })
    ]))
  ], 64);
}

script$h.render = render$h;
script$h.__file = "src/components/siTooltip/index.vue";

const install$f = (app) => {
  app.component("si-tooltip", script$h);
};
var index$f = { install: install$f };

var script$g = defineComponent({
  props: {
    color: { type: String },
    background: { type: String },
    type: { type: String, default: "primary" },
    variant: { type: String, default: "default" },
    target: { type: HTMLElement },
    text: { type: String }
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    }
  }
});

const _hoisted_1$d = { class: "si-loading__load" };
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("div", { class: "si-loading__load__animation" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "si-loading__load__animation__1" }),
  /* @__PURE__ */ createElementVNode("div", { class: "si-loading__load__animation__2" }),
  /* @__PURE__ */ createElementVNode("div", { class: "si-loading__load__animation__3" })
], -1);
const _hoisted_3$a = { class: "si-loading__load__text" };
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "si-loading" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(["si-loading", {
          [`si-loading--${_ctx.type}`]: true,
          [`si-loading--${_ctx.variant}`]: true,
          target: _ctx.target
        }]),
        style: normalizeStyle([_ctx.siColor, _ctx.background ? { background: _ctx.background } : ""])
      }, [
        createElementVNode("div", _hoisted_1$d, [
          _hoisted_2$b,
          createElementVNode("div", _hoisted_3$a, toDisplayString(_ctx.text), 1)
        ])
      ], 6), [
        [vShow, _ctx.isVisible]
      ])
    ]),
    _: 1
  });
}

script$g.render = render$g;
script$g.__file = "src/components/siLoading/index.vue";

function getTarget(optionTarget) {
  let target = null;
  if (typeof optionTarget === "string") {
    target = document.querySelector(optionTarget);
  } else if (optionTarget instanceof HTMLElement) {
    target = optionTarget;
  } else {
    target = document.body;
  }
  return target;
}
const Loading = function(options = {}) {
  const target = getTarget(options.target);
  target.style.position = "relative";
  const loadingApp = createApp(script$g, options);
  const el = document.createElement("div");
  loadingApp.config.globalProperties.close = function() {
    this.isVisible = false;
    setTimeout(() => target.removeChild(el), 500);
  };
  const loadingInstance = loadingApp.mount(el);
  target.appendChild(el);
  nextTick(() => {
    loadingInstance.$data.isVisible = true;
  });
  return loadingInstance;
};

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const createInstance = (el, binding) => {
  const color = el.getAttribute("suni-loading-color");
  const background = el.getAttribute("suni-loading-background");
  const type = el.getAttribute("suni-loading-type");
  const variant = el.getAttribute("suni-loading-variant");
  const text = el.getAttribute("suni-loading-text");
  const scale = el.getAttribute("suni-loading-scale");
  const options = {};
  color && (options.color = color);
  background && (options.background = background);
  type && (options.type = type);
  variant && (options.variant = variant);
  text && (options.text = text);
  scale && (options.scale = scale);
  return Loading(__spreadValues({ target: el }, options));
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value)
      el.instance = createInstance(el);
  },
  updated(el, binding) {
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        el.instance = createInstance(el);
      } else {
        el.instance.close();
      }
    }
  },
  unmounted(el) {
    var _a;
    (_a = el == null ? void 0 : el.instance) == null ? void 0 : _a.close();
  }
};

const install$e = (app) => {
  app.config.globalProperties.$loading = Loading;
  app.directive("loading", vLoading);
};
var index$e = { install: install$e };

var script$f = defineComponent({
  props: {
    modelValue: { type: String, default: "" },
    placeholder: { type: String },
    color: { type: String },
    type: { type: String },
    variant: { type: String },
    state: { type: Boolean },
    flexible: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    inputType: { type: String, default: "text" }
  },
  emits: ["update:modelValue"],
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    }
  },
  methods: {
    inputHandle(e) {
      const target = e.target;
      this.$emit("update:modelValue", target.value);
    }
  }
});

const _hoisted_1$c = ["type", "value", "placeholder", "id", "disabled"];
const _hoisted_2$a = {
  key: 0,
  class: "si-input__prefix"
};
const _hoisted_3$9 = {
  key: 1,
  class: "si-input__suffix"
};
const _hoisted_4$8 = ["for"];
const _hoisted_5$7 = {
  key: 3,
  class: "si-input__effect"
};
const _hoisted_6$3 = {
  key: 4,
  class: "si-input__loading"
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["si-input", {
      type: _ctx.type || _ctx.color,
      [`si-input--${_ctx.type}`]: _ctx.type,
      [`si-input--${_ctx.variant}`]: _ctx.variant,
      state: _ctx.state,
      flexible: _ctx.flexible,
      prefix: _ctx.$slots.prefix,
      suffix: _ctx.$slots.suffix,
      disabled: _ctx.disabled
    }]),
    style: normalizeStyle(_ctx.siColor)
  }, [
    createElementVNode("input", {
      type: _ctx.inputType,
      class: normalizeClass(["si-input__content", _ctx.modelValue ? "value" : ""]),
      value: _ctx.modelValue,
      onInput: _cache[0] || (_cache[0] = (...args) => _ctx.inputHandle && _ctx.inputHandle(...args)),
      placeholder: !_ctx.flexible ? _ctx.placeholder : "",
      id: String(_ctx.$.uid),
      disabled: _ctx.disabled
    }, null, 42, _hoisted_1$c),
    _ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_2$a, [
      renderSlot(_ctx.$slots, "prefix")
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", _hoisted_3$9, [
      renderSlot(_ctx.$slots, "suffix")
    ])) : createCommentVNode("v-if", true),
    _ctx.placeholder && _ctx.flexible ? (openBlock(), createElementBlock("label", {
      key: 2,
      for: String(_ctx.$.uid),
      class: "si-input__label"
    }, toDisplayString(_ctx.placeholder), 9, _hoisted_4$8)) : createCommentVNode("v-if", true),
    _ctx.variant ? (openBlock(), createElementBlock("div", _hoisted_5$7)) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_6$3)) : createCommentVNode("v-if", true)
  ], 6);
}

script$f.render = render$f;
script$f.__file = "src/components/siInput/index.vue";

const install$d = (app) => {
  app.component("si-input", script$f);
};
var index$d = { install: install$d };

var script$e = defineComponent({
  name: "CheckboxIcon",
  props: {
    indeterminate: Boolean,
    checked: Boolean
  }
});

const _hoisted_1$b = /* @__PURE__ */ createElementVNode("div", { class: "rect" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "line1" }),
  /* @__PURE__ */ createElementVNode("div", { class: "line2" })
], -1);
const _hoisted_2$9 = [
  _hoisted_1$b
];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass(["checkbox-icon", { indeterminate: _ctx.indeterminate, checked: _ctx.checked }])
  }, _hoisted_2$9, 2);
}

script$e.render = render$e;
script$e.__file = "src/components/siCheckbox/checkbox-icon.vue";

var script$d = defineComponent({
  name: "SiCheckbox",
  components: { checkboxIcon: script$e },
  props: {
    modelValue: { type: [Boolean, Number, String], default: void 0 },
    value: { type: [String, Boolean, Number] },
    trueValue: { type: [String, Number], default: void 0 },
    falseValue: { type: [String, Number], default: void 0 },
    color: { type: String },
    type: { type: String, default: "primary" },
    disabled: Boolean,
    lineThrough: Boolean,
    indeterminate: Boolean,
    loading: Boolean
  },
  inject: { CheckboxGroup: { default: void 0 } },
  emits: ["update:modelValue"],
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    },
    checked() {
      const { modelValue, trueValue, value } = this.$props;
      if (this.isGroup) {
        const { CheckboxGroup } = this;
        return Array.isArray(CheckboxGroup.modelValue) && CheckboxGroup.modelValue.includes(value);
      } else {
        if (typeof modelValue === "boolean" && trueValue === void 0)
          return modelValue;
        else
          return modelValue === trueValue;
      }
    },
    isGroup() {
      const { CheckboxGroup } = this;
      if (CheckboxGroup && CheckboxGroup.name == "SiCheckboxGroup")
        return true;
      else
        return false;
    }
  },
  methods: {
    change(e) {
      var _a, _b;
      const { $props, $emit } = this;
      const { CheckboxGroup } = this;
      const target = e.target;
      if (this.isGroup) {
        if ($props.value !== void 0) {
          const modelValue = CheckboxGroup.modelValue;
          if (Array.isArray(modelValue)) {
            if (target.checked) {
              !modelValue.includes($props.value) && modelValue.push($props.value);
            } else {
              const index = modelValue.indexOf($props.value);
              if (index > -1)
                modelValue.splice(index, 1);
            }
          } else {
            if (target.checked) {
              CheckboxGroup.update([$props.value]);
            }
          }
        }
      } else {
        const target2 = e.target;
        const value = target2.checked ? (_a = $props.trueValue) != null ? _a : true : (_b = $props.falseValue) != null ? _b : false;
        $emit("update:modelValue", value);
      }
    }
  }
});

const _hoisted_1$a = { class: "si-checkbox__input" };
const _hoisted_2$8 = ["checked"];
const _hoisted_3$8 = { class: "si-checkbox__effect" };
const _hoisted_4$7 = {
  key: 0,
  class: "si-checkbox__icon"
};
const _hoisted_5$6 = { class: "si-checkbox__label" };
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox_icon = resolveComponent("checkbox-icon");
  return openBlock(), createElementBlock("label", mergeProps(_ctx.$attrs, {
    class: ["si-checkbox", {
      [`si-button--${_ctx.type}`]: _ctx.type,
      checked: _ctx.checked,
      disabled: _ctx.disabled,
      lineThrough: _ctx.lineThrough,
      loading: _ctx.loading
    }],
    style: _ctx.siColor
  }), [
    createElementVNode("span", _hoisted_1$a, [
      createElementVNode("input", {
        class: "si-checkbox__original",
        type: "checkbox",
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args)),
        checked: _ctx.checked
      }, null, 40, _hoisted_2$8),
      createElementVNode("span", _hoisted_3$8, [
        _ctx.$slots.icon ? (openBlock(), createElementBlock("span", _hoisted_4$7, [
          renderSlot(_ctx.$slots, "icon")
        ])) : (openBlock(), createBlock(_component_checkbox_icon, {
          key: 1,
          checked: _ctx.checked,
          indeterminate: _ctx.indeterminate
        }, null, 8, ["checked", "indeterminate"]))
      ])
    ]),
    createElementVNode("span", _hoisted_5$6, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 16);
}

script$d.render = render$d;
script$d.__file = "src/components/siCheckbox/index.vue";

const install$c = (app) => {
  app.component("si-checkbox", script$d);
};
var index$c = { install: install$c };

var script$c = defineComponent({
  name: "SiCheckboxGroup",
  props: {
    modelValue: { type: Array, default: () => void 0 }
  },
  provide() {
    return {
      CheckboxGroup: computed(() => ({
        name: "SiCheckboxGroup",
        modelValue: this.modelValue,
        update: this.update
      }))
    };
  },
  emits: ["update:modelValue"],
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    }
  }
});

const _hoisted_1$9 = { class: "si-checkbox-group" };
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "default")
  ]);
}

script$c.render = render$c;
script$c.__file = "src/components/siCheckboxGroup/index.vue";

const install$b = (app) => {
  app.component("si-checkbox-group", script$c);
};
var index$b = { install: install$b };

var script$b = defineComponent({
  props: {
    modelValue: [String, Number, Boolean],
    activeValue: { type: [String, Number, Boolean], default: true },
    inactiveValue: { type: [String, Number, Boolean], default: false },
    color: { type: String },
    type: { type: String, default: "primary" },
    disabled: Boolean,
    loading: Boolean,
    icon: Boolean,
    indeterminate: Boolean,
    square: Boolean
  },
  emits: ["update:modelValue"],
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    },
    checked() {
      return this.modelValue === this.activeValue;
    }
  },
  methods: {
    click() {
      if (this.indeterminate)
        return;
      if (this.checked)
        this.$emit("update:modelValue", this.inactiveValue);
      else
        this.$emit("update:modelValue", this.activeValue);
    }
  }
});

const _hoisted_1$8 = ["checked"];
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("span", { class: "si-switch__background" }, null, -1);
const _hoisted_3$7 = { class: "si-switch__circle" };
const _hoisted_4$6 = { class: "si-switch__text on" };
const _hoisted_5$5 = { class: "si-switch__text off" };
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.click && _ctx.click(...args))
  }, _ctx.$attrs, {
    style: _ctx.siColor,
    class: ["si-switch", {
      [`si-button--${_ctx.type}`]: _ctx.type,
      checked: _ctx.checked,
      disabled: _ctx.disabled,
      loading: _ctx.loading,
      "si-switch--icon": _ctx.icon,
      "si-switch--indeterminate": _ctx.indeterminate,
      "si-switch--square": _ctx.square
    }]
  }), [
    createElementVNode("input", {
      type: "checkbox",
      checked: _ctx.checked,
      class: "si-switch__input"
    }, null, 8, _hoisted_1$8),
    _hoisted_2$7,
    createElementVNode("span", _hoisted_3$7, [
      renderSlot(_ctx.$slots, "circle")
    ]),
    createElementVNode("span", _hoisted_4$6, [
      _ctx.$slots.on ? renderSlot(_ctx.$slots, "on", { key: 0 }) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ]),
    createElementVNode("span", _hoisted_5$5, [
      _ctx.$slots.off ? renderSlot(_ctx.$slots, "off", { key: 0 }) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ])
  ], 16);
}

script$b.render = render$b;
script$b.__file = "src/components/siSwitch/index.vue";

const install$a = (app) => {
  app.component("si-switch", script$b);
};
var index$a = { install: install$a };

var script$a = defineComponent({
  name: "SiIconArrow",
  props: {
    active: Boolean
  }
});

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass(["arrow-icon", { active: _ctx.active }])
  }, null, 2);
}

script$a.render = render$a;
script$a.__file = "src/icons/arrow.vue";

var getSelectPosition = (content) => {
  const { width, height, bottom, top, left } = content.getBoundingClientRect();
  const style = {};
  style.width = `${width}px`;
  style.left = `${left}px`;
  let position = "bottom";
  if (window.innerHeight - bottom < 200)
    position = "top";
  if (position === "top") {
    style.bottom = `${window.innerHeight - top + 4}px`;
  } else if (position == "bottom") {
    style.top = `${bottom - 4}px`;
  } else {
    console.warn("[suni select]", "position must one of ['top', 'bottom']");
  }
  return [style, position];
};

var script$9 = defineComponent({
  name: "SiSelect",
  components: { ArrowIcon: script$a },
  emits: ["update:modelValue", "select"],
  provide() {
    return {
      Select: computed(() => ({
        name: "SiSelect",
        optionsArray: this.optionsArray,
        options: this.options,
        selectValue: this.selectValue,
        modelValue: this.modelValue,
        select: this.select,
        filter: this.filter,
        filterText: this.filterText
      }))
    };
  },
  props: {
    modelValue: [String, Number, Array],
    placeholder: String,
    color: { type: String },
    type: { type: String, default: "primary" },
    state: Boolean,
    disabled: Boolean,
    loading: Boolean,
    filter: Boolean
  },
  data() {
    return {
      active: false,
      isFocus: false,
      positionStyle: {},
      position: "",
      optionsArray: [],
      selectIndex: -1,
      filterText: ""
    };
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    },
    options() {
      if (Array.isArray(this.optionsArray)) {
        if (this.filter && this.filterText)
          return this.optionsArray.filter((item) => item.label.toLowerCase().includes(this.filterText.toLowerCase()));
        return this.optionsArray;
      }
      return [];
    },
    selectOption() {
      if (typeof this.selectIndex === "number" && this.selectIndex < this.options.length && this.selectIndex > -1)
        return this.options[this.selectIndex];
    },
    selectValue() {
      if (this.selectOption)
        return this.selectOption.value;
    },
    selectOffsetBottom() {
      if (this.selectOption) {
        const option = this.selectOption.el;
        const { y: optionY, height: optionH } = option.getBoundingClientRect();
        const options = this.$refs.options;
        const { y: optionsY, height: optionsH } = options.getBoundingClientRect();
        return optionsY + optionsH - (optionY + optionH);
      }
    },
    selectOffsetTop() {
      if (this.selectOption) {
        const option = this.selectOption.el;
        const { y: optionY } = option.getBoundingClientRect();
        const options = this.$refs.options;
        const { y: optionsY } = options.getBoundingClientRect();
        return optionY - optionsY;
      }
    },
    selectedOption() {
      const options = this.options;
      return options.find((item) => item.value === this.modelValue);
    },
    selectedValue() {
      if (this.selectedOption)
        return this.selectedOption.label;
      else
        return this.modelValue;
    }
  },
  methods: {
    getPosition() {
      const selectPosition = getSelectPosition(this.$refs.select);
      this.positionStyle = selectPosition[0];
      this.position = selectPosition[1];
    },
    activeHandle(e) {
      this.getPosition();
      this.active = true;
      window.removeEventListener("keydown", this.focusKeydown);
      this.$refs.select.removeEventListener("click", this.activeHandle);
      this.$refs.select.addEventListener("click", this.inactiveHandle);
      document.body.addEventListener("click", this.bodyClick);
      window.addEventListener("resize", this.getPosition);
      window.addEventListener("scroll", this.getPosition, true);
      window.addEventListener("keydown", this.activeKeydown);
    },
    inactiveHandle(e) {
      this.active = false;
      this.selectIndex = -1;
      this.filterText = "";
      this.$refs.input.blur();
      if (this.isFocus)
        window.addEventListener("keydown", this.focusKeydown);
      this.$refs.select.removeEventListener("click", this.inactiveHandle);
      document.body.removeEventListener("click", this.bodyClick);
      window.removeEventListener("resize", this.getPosition);
      window.removeEventListener("scroll", this.getPosition, true);
      window.removeEventListener("keydown", this.activeKeydown);
      this.$refs.select.addEventListener("click", this.activeHandle);
    },
    activeKeydown(e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.selectNext();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        this.selectPrev();
      } else if (e.key === "Enter") {
        e.preventDefault();
        this.select(this.selectValue);
      } else if (e.key === "Escape") {
        this.inactiveHandle();
      }
    },
    focusKeydown(e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
        e.preventDefault();
        this.selectIndex = 0;
        this.activeHandle();
      }
    },
    bodyClick(e) {
      if (!e.composedPath().includes(this.$refs.select) && !e.composedPath().includes(this.$refs.options)) {
        this.inactiveHandle();
      }
    },
    focus() {
      this.isFocus = true;
      window.addEventListener("keydown", this.focusKeydown);
    },
    blur() {
      this.isFocus = false;
      window.removeEventListener("keydown", this.focusKeydown);
      this.$refs.input.addEventListener("focus", this.focus);
    },
    selectNext() {
      if (this.selectIndex < 0)
        this.selectIndex = 0;
      else if (this.selectIndex < this.options.length - 1)
        this.selectIndex++;
      else
        this.selectIndex = 0;
      if (this.optionsArray[this.selectIndex].disabled)
        return this.selectNext();
      this.align();
    },
    selectPrev() {
      if (this.selectIndex < 1)
        this.selectIndex = this.options.length - 1;
      else if (this.selectIndex < this.options.length)
        this.selectIndex--;
      else
        this.selectIndex = this.options.length - 1;
      if (this.optionsArray[this.selectIndex].disabled)
        return this.selectPrev();
      this.align();
    },
    select(value) {
      this.$emit("update:modelValue", value);
      this.$emit("select", value);
      this.inactiveHandle();
    },
    align() {
      if (this.selectOffsetBottom && this.selectOffsetBottom < 0) {
        this.$refs.options.scrollBy({ top: -this.selectOffsetBottom + 5, behavior: "smooth" });
      } else if (this.selectOffsetTop && this.selectOffsetTop < 0) {
        this.$refs.options.scrollBy({ top: this.selectOffsetTop - 5, behavior: "smooth" });
      }
    },
    filterInput(e) {
      this.filterText = e.target.value;
    }
  },
  created() {
    this.selectNext = throttle(this.selectNext, 80);
    this.selectPrev = throttle(this.selectPrev, 80);
  },
  mounted() {
    this.$refs.input.addEventListener("focus", this.focus);
    this.$refs.input.addEventListener("blur", this.blur);
    this.$refs.select.addEventListener("click", this.activeHandle);
  },
  destroyed() {
    this.$refs.input.removeEventListener("focus", this.focus);
    this.$refs.select.removeEventListener("click", this.activeHandle);
    this.$refs.select.removeEventListener("click", this.inactiveHandle);
    document.body.removeEventListener("click", this.bodyClick);
    window.removeEventListener("resize", this.getPosition);
    window.removeEventListener("scroll", this.getPosition, true);
    window.removeEventListener("keydown", this.activeKeydown);
    window.removeEventListener("keydown", this.focusKeydown);
  }
});

const _hoisted_1$7 = ["value", "disabled", "readonly", "placeholder"];
const _hoisted_2$6 = { class: "si-select__suffix" };
const _hoisted_3$6 = {
  key: 1,
  class: "si-options__no-data"
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_icon = resolveComponent("arrow-icon");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", mergeProps(_ctx.$attrs, {
      ref: "select",
      class: ["si-select", {
        [`si-select--${_ctx.type}`]: _ctx.type,
        [_ctx.position]: _ctx.position,
        state: _ctx.state,
        active: _ctx.active,
        disabled: _ctx.disabled,
        loading: _ctx.loading
      }],
      style: _ctx.siColor
    }), [
      createElementVNode("input", {
        class: "si-select__input",
        ref: "input",
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.filterInput && _ctx.filterInput(...args)),
        value: _ctx.filter && _ctx.active ? _ctx.filterText : _ctx.selectedValue,
        disabled: _ctx.disabled || _ctx.loading,
        readonly: !_ctx.filter,
        placeholder: _ctx.placeholder
      }, null, 40, _hoisted_1$7),
      createElementVNode("span", _hoisted_2$6, [
        !_ctx.loading ? (openBlock(), createBlock(_component_arrow_icon, {
          key: 0,
          active: _ctx.active
        }, null, 8, ["active"])) : createCommentVNode("v-if", true)
      ])
    ], 16),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "si-options" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref: "options",
            style: normalizeStyle([_ctx.siColor, _ctx.positionStyle]),
            class: normalizeClass(["si-options", { [`si-select--${_ctx.type}`]: _ctx.type, [_ctx.position]: _ctx.position }])
          }, [
            _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_3$6, "No data available"))
          ], 6), [
            [vShow, _ctx.active]
          ])
        ]),
        _: 3
      })
    ]))
  ], 64);
}

script$9.render = render$9;
script$9.__file = "src/components/siSelect/index.vue";

const install$9 = (app) => {
  app.component("si-select", script$9);
};
var index$9 = { install: install$9 };

var script$8 = defineComponent({
  name: "SiOption",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: String, required: true },
    disabled: Boolean
  },
  inject: ["Select"],
  computed: {
    isSelect() {
      const Select = this.Select;
      return !!Select && Select.name === "SiSelect";
    },
    select() {
      if (this.isSelect) {
        const Select = this.Select;
        return Select.selectValue === this.value;
      }
    },
    selected() {
      if (this.isSelect) {
        const Select = this.Select;
        return Select.modelValue === this.value;
      }
    },
    isShow() {
      if (this.isSelect) {
        return !!this.Select.options.find((item) => item.value === this.value);
      }
      return true;
    }
  },
  methods: {
    injectOption() {
      if (this.isSelect && this.$el.style.display !== "none") {
        const optionsArray = this.Select.optionsArray;
        optionsArray.push({
          label: this.label,
          value: this.value,
          disabled: this.disabled,
          el: this.$el
        });
      }
    },
    click() {
      if (this.isSelect) {
        const Select = this.Select;
        Select.select(this.value);
      }
    }
  },
  mounted() {
    this.injectOption();
  }
});

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.click && _ctx.click(...args)),
    class: normalizeClass(["si-option", { disabled: _ctx.disabled, select: _ctx.select, selected: _ctx.selected, hidden: !_ctx.isShow }])
  }, toDisplayString(_ctx.label), 3);
}

script$8.render = render$8;
script$8.__file = "src/components/siOption/index.vue";

const install$8 = (app) => {
  app.component("si-option", script$8);
};
var index$8 = { install: install$8 };

var script$7 = defineComponent({
  name: "SiOptionGroup",
  props: {
    hiddenOptionGroup: Boolean
  }
});

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["si-select__option-group", { hiddenOptionGroup: _ctx.hiddenOptionGroup }])
  }, [
    createElementVNode("h5", null, [
      renderSlot(_ctx.$slots, "title")
    ]),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}

script$7.render = render$7;
script$7.__file = "src/components/siOptionGroup/index.vue";

const install$7 = (app) => {
  app.component("si-option-group", script$7);
};
var index$7 = { install: install$7 };

var script$6 = defineComponent({
  name: "SiAvatar",
  props: {
    color: { type: String },
    type: { type: String },
    src: { type: String },
    text: { type: String },
    badge: { type: Boolean },
    badgeType: { type: String, default: "primary" },
    badgeColor: { type: String },
    badgePosition: { type: String, default: "top-right" },
    circle: { type: Boolean },
    square: { type: Boolean },
    loading: { type: Boolean }
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    },
    siBadgeColor() {
      if (this.badgeColor && isColor(this.badgeColor))
        return `--si-color: ${getColor(this.badgeColor)}`;
      else
        return "";
    }
  }
});

const _hoisted_1$6 = {
  key: 0,
  class: "si-avatar__figure"
};
const _hoisted_2$5 = ["src"];
const _hoisted_3$5 = {
  key: 1,
  class: "si-avatar__default"
};
const _hoisted_4$5 = {
  key: 2,
  class: "si-avatar__text"
};
const _hoisted_5$4 = {
  key: 3,
  class: "si-avatar__loading"
};
const _hoisted_6$2 = {
  key: 0,
  class: "si-avatar__badge__slot"
};
const _hoisted_7 = {
  key: 1,
  class: "si-avatar__badge__point"
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["si-avatar", {
      [`si-button--${_ctx.type}`]: _ctx.type,
      color: _ctx.type || _ctx.color,
      circle: _ctx.circle,
      square: _ctx.square,
      loading: _ctx.loading
    }]),
    style: normalizeStyle(_ctx.siColor)
  }, [
    _ctx.src ? (openBlock(), createElementBlock("figure", _hoisted_1$6, [
      createElementVNode("img", {
        class: "si-avatar__img",
        src: _ctx.src
      }, null, 8, _hoisted_2$5)
    ])) : _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
      renderSlot(_ctx.$slots, "default")
    ])) : _ctx.text ? (openBlock(), createElementBlock("div", _hoisted_4$5, toDisplayString(_ctx.text), 1)) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_5$4)) : createCommentVNode("v-if", true),
    _ctx.badge ? (openBlock(), createElementBlock("div", {
      key: 4,
      class: normalizeClass(["si-avatar__badge", { [`si-avatar__badge--${_ctx.badgeType}`]: _ctx.badgeType, [`si-avatar__badge--${_ctx.badgePosition}`]: _ctx.badgePosition }]),
      style: normalizeStyle(_ctx.siBadgeColor)
    }, [
      _ctx.$slots.badge ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
        renderSlot(_ctx.$slots, "badge")
      ])) : (openBlock(), createElementBlock("div", _hoisted_7))
    ], 6)) : createCommentVNode("v-if", true)
  ], 6);
}

script$6.render = render$6;
script$6.__file = "src/components/siAvatar/index.vue";

const install$6 = (app) => {
  app.component("si-avatar", script$6);
};
var index$6 = { install: install$6 };

var script$5 = defineComponent({
  name: "SiIconClose"
});

const _hoisted_1$5 = { class: "close-icon" };
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", _hoisted_1$5);
}

script$5.render = render$5;
script$5.__file = "src/icons/close.vue";

var script$4 = defineComponent({
  components: { CloseIcon: script$5 },
  props: {
    parent: { type: HTMLElement, required: true },
    container: { type: HTMLElement, required: true },
    title: String,
    text: String,
    closeButton: { type: Boolean, default: true },
    duration: { type: Number, default: 4e3 },
    color: { type: String },
    type: { type: String },
    iconClass: { type: String },
    square: Boolean,
    border: Boolean
  },
  data() {
    return {
      visible: false,
      closeTimer: null,
      loading: false
    };
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    }
  },
  methods: {
    close() {
      this.visible = false;
    },
    enter(el) {
      const h = el.scrollHeight;
      el.style.maxHeight = `${h + 40}px`;
    },
    afterEnter() {
      if (this.duration > 0) {
        this.closeTimer = setTimeout(() => {
          this.visible = false;
        }, this.duration);
      }
    },
    beforeLeave() {
      this.closeTimer && clearTimeout(this.closeTimer);
    },
    afterLeave() {
      const parent = this.parent;
      if (parent.childNodes.length === 1) {
        document.body.removeChild(parent);
      } else {
        parent.removeChild(this.container);
      }
    }
  }
});

const _hoisted_1$4 = {
  key: 0,
  class: "si-notification__icon"
};
const _hoisted_2$4 = {
  key: 1,
  class: "si-notification__content"
};
const _hoisted_3$4 = { class: "si-notification__content__header" };
const _hoisted_4$4 = { class: "si-notification__content__text" };
const _hoisted_5$3 = {
  key: 2,
  class: "si-notification__loading"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_icon = resolveComponent("close-icon");
  return openBlock(), createBlock(Transition, {
    name: "si-notification",
    onEnter: _ctx.enter,
    onBeforeLeave: _ctx.beforeLeave,
    onAfterLeave: _ctx.afterLeave,
    onAfterEnter: _ctx.afterEnter
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        style: normalizeStyle(_ctx.siColor),
        class: normalizeClass(["si-notification", {
          [`si-notification--${_ctx.type}`]: _ctx.type,
          icon: _ctx.iconClass,
          border: _ctx.border,
          square: _ctx.square,
          loading: _ctx.loading
        }])
      }, [
        _ctx.iconClass && !_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
          createElementVNode("i", {
            class: normalizeClass(_ctx.iconClass)
          }, null, 2)
        ])) : createCommentVNode("v-if", true),
        !_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createElementVNode("header", _hoisted_3$4, [
            createElementVNode("h4", null, toDisplayString(_ctx.title), 1)
          ]),
          createElementVNode("div", _hoisted_4$4, [
            createElementVNode("p", null, toDisplayString(_ctx.text), 1)
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_5$3)),
        createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args)),
          class: "si-notification__close"
        }, [
          createVNode(_component_close_icon)
        ])
      ], 6), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 1
  }, 8, ["onEnter", "onBeforeLeave", "onAfterLeave", "onAfterEnter"]);
}

script$4.render = render$4;
script$4.__file = "src/components/siNotification/index.vue";

const positions = ["top-right", "top-center", "top-left", "bottom-center", "bottom-left", "bottom-right"];
const Notification = function(options = {}) {
  if (!options.position || !positions.includes(options.position))
    options.position = "top-right";
  let parent = document.body.querySelector(`.si-notification-parent--${options.position}`);
  if (!parent) {
    parent = document.createElement("div");
    parent.classList.add("si-notification-parent");
    parent.classList.add(`si-notification-parent--${options.position}`);
  }
  options.parent = parent;
  delete options.position;
  if (!options.iconClass)
    switch (options.type) {
      case "primary":
      case "info":
        options.iconClass = "bx bx-info-circle";
        break;
      case "success":
        options.iconClass = "bx bx-check-circle";
        break;
      case "warning":
        options.iconClass = "bx bx-error-circle";
        break;
      case "danger":
        options.iconClass = "bx bx-x-circle";
        break;
      case "dark":
        options.iconClass = "bx bx-moon";
        break;
      case "light":
        options.iconClass = "bx bx-sun";
        break;
    }
  const el = document.createElement("div");
  options.container = el;
  const notificationApp = createApp(script$4, options);
  const notificationInstance = notificationApp.mount(el);
  parent.appendChild(el);
  document.body.appendChild(parent);
  nextTick(() => {
    notificationInstance.visible = true;
  });
  return notificationInstance;
};

const install$5 = (app) => {
  app.config.globalProperties.$notify = Notification;
};
var index$5 = { install: install$5 };

var script$3 = defineComponent({
  name: "SiRadio",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
    value: { type: [String, Number, Boolean], default: "" },
    color: { type: String },
    type: { type: String, default: "primary" },
    disabled: Boolean,
    loading: Boolean
  },
  emits: ["update:modelValue"],
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    },
    checked() {
      return this.modelValue === this.value;
    }
  },
  methods: {
    inputHandle() {
      this.$emit("update:modelValue", this.value);
    }
  }
});

const _hoisted_1$3 = { class: "si-radio__input" };
const _hoisted_2$3 = ["checked"];
const _hoisted_3$3 = { class: "si-radio__effect" };
const _hoisted_4$3 = {
  key: 0,
  class: "si-radio__effect__icon"
};
const _hoisted_5$2 = {
  key: 1,
  class: "si-radio__effect__loading"
};
const _hoisted_6$1 = { class: "si-radio__label" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", mergeProps({
    tabindex: "0",
    onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.inputHandle && _ctx.inputHandle(...args), ["enter"]))
  }, _ctx.$attrs, {
    class: ["si-radio", {
      [`si-component--${_ctx.type}`]: _ctx.type,
      checked: _ctx.checked,
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }],
    style: _ctx.siColor
  }), [
    createElementVNode("span", _hoisted_1$3, [
      createElementVNode("input", {
        class: "si-radio__original",
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.inputHandle && _ctx.inputHandle(...args)),
        type: "radio",
        checked: _ctx.checked,
        tabindex: "-1"
      }, null, 40, _hoisted_2$3),
      createElementVNode("span", _hoisted_3$3, [
        _ctx.$slots.icon ? (openBlock(), createElementBlock("span", _hoisted_4$3, [
          renderSlot(_ctx.$slots, "icon")
        ])) : createCommentVNode("v-if", true),
        _ctx.loading ? (openBlock(), createElementBlock("span", _hoisted_5$2)) : createCommentVNode("v-if", true)
      ])
    ]),
    createElementVNode("span", _hoisted_6$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 16);
}

script$3.render = render$3;
script$3.__file = "src/components/siRadio/index.vue";

const install$4 = (app) => {
  app.component("si-radio", script$3);
};
var index$4 = { install: install$4 };

var script$2 = defineComponent({
  name: "SiDialog",
  components: { CloseIcon: script$5 },
  inheritAttrs: false,
  props: {
    modelValue: Boolean,
    loading: Boolean,
    notClose: Boolean,
    blur: Boolean,
    square: Boolean,
    preventClose: Boolean
  },
  emits: ["update:modelValue"],
  data() {
    return {
      rebound: false
    };
  },
  watch: {
    modelValue(value) {
      if (value) {
        window.addEventListener("keydown", this.keydown);
      } else {
        window.removeEventListener("keydown", this.keydown);
      }
    }
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
    modalClick() {
      if (!this.preventClose)
        this.close();
      else
        this.reboundHandle();
    },
    reboundHandle() {
      this.rebound = true;
      setTimeout(() => this.rebound = false, 300);
    },
    keydown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        this.modalClick();
      }
    }
  },
  destroyed() {
    window.removeEventListener("keydown", this.keydown);
  }
});

const _hoisted_1$2 = {
  key: 0,
  class: "si-dialog__header"
};
const _hoisted_2$2 = { class: "si-dialog__content" };
const _hoisted_3$2 = {
  key: 1,
  class: "si-dialog__footer"
};
const _hoisted_4$2 = {
  key: 2,
  class: "si-dialog__loading"
};
const _hoisted_5$1 = /* @__PURE__ */ createElementVNode("div", { class: "si-dialog__loading__load" }, null, -1);
const _hoisted_6 = [
  _hoisted_5$1
];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_icon = resolveComponent("close-icon");
  return openBlock(), createBlock(Transition, { name: "si-dialog" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(["si-dialog-modal", { blur: _ctx.blur }]),
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.modalClick && _ctx.modalClick(...args))
      }, [
        createElementVNode("div", mergeProps(_ctx.$attrs, {
          class: ["si-dialog", {
            header: _ctx.$slots.header,
            footer: _ctx.$slots.header,
            loading: _ctx.loading,
            square: _ctx.square,
            rebound: _ctx.rebound
          }],
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }), [
          _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
            renderSlot(_ctx.$slots, "header")
          ])) : createCommentVNode("v-if", true),
          createElementVNode("div", _hoisted_2$2, [
            renderSlot(_ctx.$slots, "default")
          ]),
          _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
            renderSlot(_ctx.$slots, "footer")
          ])) : createCommentVNode("v-if", true),
          _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_4$2, _hoisted_6)) : createCommentVNode("v-if", true),
          !_ctx.notClose ? (openBlock(), createElementBlock("button", {
            key: 3,
            class: "si-dialog__close",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
          }, [
            createVNode(_component_close_icon)
          ])) : createCommentVNode("v-if", true)
        ], 16)
      ], 2), [
        [vShow, _ctx.modelValue]
      ])
    ]),
    _: 3
  });
}

script$2.render = render$2;
script$2.__file = "src/components/siDialog/index.vue";

const install$3 = (app) => {
  app.component("si-dialog", script$2);
};
var index$3 = { install: install$3 };

var script$1 = defineComponent({
  name: "SiPagination",
  props: {
    color: { type: String },
    type: { type: String, default: "primary" },
    disabled: { type: Boolean },
    circle: { type: Boolean },
    square: { type: Boolean },
    total: { type: Number, default: 0 },
    pageCount: { type: Number, default: 7 },
    current: { type: Number },
    pageSize: { type: Number }
  },
  data() {
    return {
      _current: 1,
      _pageSize: 10
    };
  },
  computed: {
    siColor() {
      if (this.color && isColor(this.color))
        return `--si-color: ${getColor(this.color)}`;
      else
        return "";
    },
    pageCurrent: {
      get() {
        if (typeof this.current === "number")
          return this.current;
        return this._current;
      },
      set(value) {
        this._current = value;
        this.$emit("update:current", value);
        this.$emit("current-change", value);
      }
    },
    pageSizeProxy: {
      get() {
        if (typeof this.pageSize === "number")
          return this.pageSize;
        return this._pageSize;
      },
      set(value) {
        this._pageSize = value;
        this.$emit("update:pageSize", value);
        this.$emit("size-change", value);
      }
    },
    pageNumber() {
      let pageNumber = Math.ceil(this.total / this.pageSizeProxy);
      pageNumber <= 0 && (pageNumber = 1);
      return pageNumber;
    },
    pages() {
      const pageArr = [];
      if (this.pageNumber < this.pageCount) {
        for (let i = 1; i <= this.pageNumber; i++)
          pageArr.push({ text: i, class: "number" });
      } else {
        const boundary = this.pageCount - 2;
        if (this.pageCurrent < boundary) {
          for (let i = 1; i <= this.pageCount - 1; i++)
            pageArr.push({ text: i, class: "number" });
          pageArr.push({ text: "", class: "ellipsis next", action: "next" });
          pageArr.push({ text: this.pageNumber, class: "number" });
        } else if (this.pageCurrent >= boundary && this.pageCurrent <= this.pageNumber - boundary) {
          const centralCount = this.pageCount - 2;
          const centralLeft = this.pageCurrent - Math.floor(centralCount / 2);
          pageArr.push({ text: 1, class: "number" });
          pageArr.push({ text: "", class: "ellipsis prev", action: "prev" });
          for (let i = centralLeft; i < centralLeft + centralCount; i++)
            pageArr.push({ text: i, class: "number" });
          pageArr.push({ text: "", class: "ellipsis next", action: "next" });
          pageArr.push({ text: this.pageNumber, class: "number" });
        } else if (this.pageCurrent > this.pageNumber - boundary) {
          pageArr.push({ text: 1, class: "number" });
          pageArr.push({ text: "", class: "ellipsis prev", action: "prev" });
          for (let i = this.pageNumber - this.pageCount + 2; i <= this.pageNumber; i++)
            pageArr.push({ text: i, class: "number" });
        }
      }
      return pageArr;
    },
    activePage() {
      const index = this.pages.findIndex((item) => String(item.text) === String(this.pageCurrent));
      if (index > -1) {
        const left = 40 * index + 2;
        return {
          left: `${left}px`,
          pageCurrent: this.pageCurrent
        };
      }
    }
  },
  methods: {
    pageClick(page) {
      if (typeof page.text === "number")
        this.pageCurrent = page.text;
      else if (typeof page.text === "string") {
        if (page.action === "next") {
          this.pageCurrent = this.pageCurrent + (this.pageCount - 2);
          this.pageCurrent > this.pageNumber && (this.pageCurrent = this.pageNumber);
        } else if (page.action === "prev") {
          this.pageCurrent = this.pageCurrent - (this.pageCount - 2);
          this.pageCurrent < 1 && (this.pageCurrent = 1);
        }
      }
      this.$refs.active.classList.add("move");
      setTimeout(() => this.$refs.active.classList.remove("move"), 250);
    },
    prevClick() {
      if (this.pageCurrent === 1)
        return;
      this.pageCurrent--;
    },
    nextClick() {
      if (this.pageCurrent === this.pageNumber)
        return;
      this.pageCurrent++;
    }
  }
});

const _hoisted_1$1 = ["disabled"];
const _hoisted_2$1 = { class: "si-pagination__pager" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = ["disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["si-pagination", { [`si-pagination--${_ctx.type}`]: _ctx.type, disabled: _ctx.disabled, circle: _ctx.circle, square: _ctx.square }]),
    style: normalizeStyle(_ctx.siColor)
  }, [
    createElementVNode("button", {
      class: "si-pagination__prev",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.prevClick && _ctx.prevClick(...args)),
      disabled: _ctx.pageCurrent === 1
    }, null, 8, _hoisted_1$1),
    createElementVNode("ul", _hoisted_2$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page) => {
        return openBlock(), createElementBlock("li", {
          onClick: ($event) => _ctx.pageClick(page),
          class: normalizeClass(page.class)
        }, toDisplayString(page.text), 11, _hoisted_3$1);
      }), 256)),
      withDirectives(createElementVNode("li", {
        ref: "active",
        class: "si-pagination__active",
        style: normalizeStyle({ left: (_a = _ctx.activePage) == null ? void 0 : _a.left })
      }, toDisplayString((_b = _ctx.activePage) == null ? void 0 : _b.pageCurrent), 5), [
        [vShow, _ctx.activePage]
      ])
    ]),
    createElementVNode("button", {
      class: "si-pagination__next",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.nextClick && _ctx.nextClick(...args)),
      disabled: _ctx.pageCurrent === _ctx.pageNumber
    }, null, 8, _hoisted_4$1)
  ], 6);
}

script$1.render = render$1;
script$1.__file = "src/components/siPagination/index.vue";

const install$2 = (app) => {
  app.component("si-pagination", script$1);
};
var index$2 = { install: install$2 };

var script = defineComponent({
  name: "SiCard",
  props: {
    type: { type: String, default: "1" }
  }
});

const _hoisted_1 = {
  key: 0,
  class: "si-card__img"
};
const _hoisted_2 = {
  key: 0,
  class: "si-card__interactions"
};
const _hoisted_3 = {
  key: 1,
  class: "si-card__text"
};
const _hoisted_4 = {
  key: 0,
  class: "si-card__title"
};
const _hoisted_5 = {
  key: 2,
  class: "si-card__buttons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["si-card", `type-${_ctx.type}`])
  }, [
    _ctx.$slots.img ? (openBlock(), createElementBlock("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "img"),
      _ctx.$slots.interactions ? (openBlock(), createElementBlock("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "interactions")
      ])) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots.text ? (openBlock(), createElementBlock("div", _hoisted_3, [
      _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "title")
      ])) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "text")
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots.buttons ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "buttons")
    ])) : createCommentVNode("v-if", true)
  ], 2);
}

script.render = render;
script.__file = "src/components/siCard/index.vue";

const install$1 = (app) => {
  app.component("si-card", script);
};
var index$1 = { install: install$1 };

var siComponents = /*#__PURE__*/Object.freeze({
	__proto__: null,
	siButton: index$h,
	siButtonGroup: index$g,
	siTooltip: index$f,
	siLoading: index$e,
	siInput: index$d,
	siCheckbox: index$c,
	siCheckboxGroup: index$b,
	siSwitch: index$a,
	siSelect: index$9,
	siOption: index$8,
	siOptionGroup: index$7,
	siAvatar: index$6,
	siNotification: index$5,
	siRadio: index$4,
	siDialog: index$3,
	siPagination: index$2,
	siCard: index$1
});

const install = (app) => {
  app.config.unwrapInjectedRef = true;
  Object.values(siComponents).forEach((siComponent) => {
    app.use(siComponent);
  });
};
var index = { install };

export { index as default };
