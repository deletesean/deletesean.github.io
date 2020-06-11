;
(function(window, document, undefined) {

	window.collisionGnome = window.collisionGnome || {};

	var COLLISION_GNOME_DEBUG = false;
	
	function setDebug(cgDebug) {
		COLLISION_GNOME_DEBUG = cgDebug;
	}

	function getSource(sprite) {
		if (sprite instanceof createjs.Bitmap) {
			return {"type": "Bitmap", "source": sprite.image, "event": 'load'}; 
		} else if (sprite instanceof createjs.Sprite) {
			return {"type": "Sprite", "source": sprite.spriteSheet, "event": 'complete'};
		} else {
			console.log("ERROR: centerRegistration() : " + sprite + " is not a valid createjs Bitmap or Sprite.");
			return null;
		}
	}

	function centerRegistration(sprite) {
		var bounds = sprite.getBounds();
		sprite.regX = Math.floor(bounds.width / 2);
		sprite.regY = Math.floor(bounds.height / 2);

	} //centerRegistration

	function actuallyAddCollider(sprite, spriteInfo, hitBoxRatio) {
		centerRegistration(sprite);

		var ratio = hitBoxRatio || 1.0;
		if (hitBoxRatio < 0.2) hitBoxRatio = 0.2; //make sure they don't accidentally make tiny or enormous colliders
		if (hitBoxRatio > 5.0) hitBoxRatio = 5.0;

		if (spriteInfo.type == "Bitmap") {
			sprite.yDist = Math.floor(sprite.image.height / 2 * ratio);
			sprite.xDist = Math.floor(sprite.image.width / 2 * ratio);
			console.log("Bitmap xDist: " + sprite.xDist + " yDist: " + sprite.yDist);
		} else if (spriteInfo.type == "Sprite") {
			sprite.yDist = Math.floor(sprite.getBounds().height / 2 * ratio);
			sprite.xDist = Math.floor(sprite.getBounds().width / 2 * ratio);
			console.log("Sprite xDist: " + sprite.xDist + " yDist: " + sprite.yDist);
		}
		sprite.collidesWith = function(other) {
			if (!other.xDist || !other.yDist) {
				//console.log("ERROR: object " + other.toString() + " at [x:" + other.x + ", y:" + other.y + "] does not have a collisionGnome collider!");
				return false;
			}

			//draw the bounding boxes if the debug variable is true -- this isn't part of the collision functionality, just a debug feature
			if (COLLISION_GNOME_DEBUG) {
				//create & draw hitbox of other
				if (!other.debox) {other.debox = new createjs.Shape(); other.debox.graphics.beginStroke("#00F"); other.debox.graphics.setStrokeStyle(1); other.debox.snapToPixel = true; other.debox.graphics.drawRect(0, 0, other.xDist * 2, other.yDist * 2); } 
				other.debox.x = other.x - other.xDist; 			other.debox.y = other.y - other.yDist;
				if (!other.addedDebox) {myStage.addChild(other.debox); other.addedDebox = true; } 
				//create & draw hitbox of sprite
				if (!sprite.debox) {sprite.debox = new createjs.Shape(); sprite.debox.graphics.beginStroke("#F00"); sprite.debox.graphics.setStrokeStyle(1); sprite.debox.snapToPixel = true; sprite.debox.graphics.drawRect(0, 0, sprite.xDist * 2, sprite.yDist * 2); } 
				sprite.debox.x = sprite.x - sprite.xDist; 		sprite.debox.y = sprite.y - sprite.yDist;
				if (!sprite.addedDebox) {myStage.addChild(sprite.debox); sprite.addedDebox = true; } }

			return (!(sprite.x - sprite.xDist >= other.x + other.xDist ||
				sprite.x + sprite.xDist <= other.x - other.xDist ||
				sprite.y - sprite.yDist >= other.y + other.yDist ||
				sprite.y + sprite.yDist <= other.y - other.yDist
			));
		}; //end of the definition of sprite.collidesWith

	}

	function addCollider(sprite, hitBoxRatio) {

		var spriteInfo = getSource(sprite);
		if (!spriteInfo) {
			console.log("ERROR: addCollider() : " + sprite + " is not a valid createjs Bitmap or Sprite.");
			return;
			
		} else {
			sprite.collidesWith = function(other) {
				return false;
			};

			if (!(spriteInfo.source.complete)) {
				spriteInfo.source.addEventListener(spriteInfo.event, function() {
					actuallyAddCollider(sprite, spriteInfo, hitBoxRatio);
				}); 
			} else {
				actuallyAddCollider(sprite, spriteInfo, hitBoxRatio);
			}

		} //end of else
	} //end of function addCollider


	window.collisionGnome.addCollider = addCollider;
	window.collisionGnome.centerRegistration = centerRegistration;
	window.collisionGnome.setDebug = setDebug;

}(this, document));