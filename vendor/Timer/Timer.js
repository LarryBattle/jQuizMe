/**
* Simple Timer
* Attaches a timer to a element
* MIT license
* Sept 13, 2013
* Requires jQuery
*/
if(!window.jQuery){
	throw new Error("This script requires jQuery.");
}
var Timer = function (el, callback) {
	this.$el = $(el);
	if (this.$el.length < 1) {
		throw new Error("Can't find elemenet");
	}
	this.callback = (typeof callback === "function") ? callback : function () {};
	this.t = null;
	this.resetTimerOnElement();
};
Timer.getFormmatedSeconds = function (secs) {
	var str = "";
	var unit_hour = 60 * 60,
	unit_min = 60;
	if (secs > unit_hour) {
		str += Math.floor(secs / unit_hour) + " hours ";
		secs -= Math.floor(secs / unit_hour) * unit_hour;
	}
	if (secs > unit_min) {
		str += Math.floor(secs / unit_min) + " minutes ";
		secs -= Math.floor(secs / unit_min) * unit_min;
	}
	str += secs + " seconds";
	return str;
};
Timer.prototype.resetTimerOnElement = function () {
	var x = this.$el.data("Timer");
	if (x && x instanceof Timer) {
		x.clearTime();
		delete x;
		this.$el.removeData("Timer");
	}
	this.$el.data("Timer", this);
};
Timer.prototype.startCountDown = function (val) {
	var that = this;
	this.clearTime().setTime(val--);
	this.t = window.setInterval(function () {
			that.setTime(val);
			if (val < 1) {
				that.clearTime().callback();
			}
			val--;
		}, 1e3);
	return this;
};
Timer.prototype.setTime = function (val) {
	this.value = val;
	this.$el.text(Timer.getFormmatedSeconds(this.value));
	return this;
};
Timer.prototype.clearTime = function () {
	clearInterval(this.t);
	this.$el.text("");
	return this;
};
