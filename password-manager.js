const crypto = require("crypto");
const sha1 = crypto.createHash("sha1");
const prompt = require("prompt-sync")({ sigint: true });

const keyword = prompt("Введите ключевое слово: ");
console.log("-".repeat(16));
console.log("Предпочтительные идентификаторы для сервисов");
console.log(
	Object.entries({
		vk: "ВКонтакте",
		facebook: "Facebook",
		ok: "Одноклассники",
	})
		.map(
			([serviveId, serviceDescription]) =>
				`${serviveId} | ${serviceDescription}`,
		)
		.join("\n"),
);
console.log("-".repeat(16));
console.log(
	"Рекомендуется вводить только доменное имя неизвестного сервиса например для EXAMPLE ORG: (example.org)",
);
console.log("-".repeat(16));
const service = prompt("Введите сервис: ").toLowerCase();
const login = prompt("Введите логин: ").toLowerCase();

const password = (() => {
	sha1.update(`${keyword}::${service}::${login}`);
	return sha1.digest("base64") + "#";
})();
console.log(`Ваш пароль: ${password}`);