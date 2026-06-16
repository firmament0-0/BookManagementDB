const dataVersion = "insert-sql-2026-06-15";

const initialData = {
  version: dataVersion,
  types: [
    { id: 1, name: "计算机", description: "计算机技术类" },
    { id: 2, name: "文学", description: "文学作品类" },
    { id: 3, name: "经济", description: "经济管理类" },
    { id: 4, name: "历史", description: "历史文化类" }
  ],
  publishers: [
    { id: 1, name: "清华大学出版社", phone: "010-62770175", address: "北京市海淀区" },
    { id: 2, name: "机械工业出版社", phone: "010-88379833", address: "北京市西城区" },
    { id: 3, name: "人民邮电出版社", phone: "010-81055110", address: "北京市东城区" },
    { id: 4, name: "中信出版社", phone: "010-84266555", address: "北京市朝阳区" }
  ],
  books: [
    { id: "B001", isbn: "9787302000011", name: "数据库系统概论", author: "王珊", publishDate: "2022-01-01", typeId: 1, publisherId: 1, pages: 450, price: 59.00, total: 5, available: 3, location: "A区01架" },
    { id: "B002", isbn: "9787302000012", name: "Java程序设计", author: "张强", publishDate: "2021-03-01", typeId: 1, publisherId: 2, pages: 520, price: 68.00, total: 4, available: 0, location: "A区02架" },
    { id: "B003", isbn: "9787302000013", name: "Python从入门到实践", author: "Eric Matthes", publishDate: "2020-06-01", typeId: 1, publisherId: 3, pages: 480, price: 79.00, total: 5, available: 2, location: "A区03架" },
    { id: "B004", isbn: "9787302000014", name: "活着", author: "余华", publishDate: "2018-05-01", typeId: 2, publisherId: 4, pages: 220, price: 39.00, total: 8, available: 5, location: "B区01架" },
    { id: "B005", isbn: "9787302000015", name: "百年孤独", author: "马尔克斯", publishDate: "2017-08-01", typeId: 2, publisherId: 4, pages: 350, price: 45.00, total: 3, available: 0, location: "B区02架" },
    { id: "B006", isbn: "9787302000016", name: "国富论", author: "亚当斯密", publishDate: "2019-04-01", typeId: 3, publisherId: 1, pages: 500, price: 58.00, total: 2, available: 1, location: "C区01架" },
    { id: "B007", isbn: "9787302000017", name: "经济学原理", author: "曼昆", publishDate: "2020-09-01", typeId: 3, publisherId: 2, pages: 620, price: 88.00, total: 4, available: 2, location: "C区02架" },
    { id: "B008", isbn: "9787302000018", name: "明朝那些事儿", author: "当年明月", publishDate: "2016-02-01", typeId: 4, publisherId: 3, pages: 400, price: 49.00, total: 2, available: 0, location: "D区01架" },
    { id: "B009", isbn: "9787302000019", name: "中国通史", author: "吕思勉", publishDate: "2015-07-01", typeId: 4, publisherId: 4, pages: 560, price: 65.00, total: 6, available: 4, location: "D区02架" },
    { id: "B010", isbn: "9787302000020", name: "三国演义", author: "罗贯中", publishDate: "2014-01-01", typeId: 2, publisherId: 1, pages: 700, price: 55.00, total: 5, available: 3, location: "B区03架" }
  ],
  readers: [
    { id: "R001", name: "张三", gender: "男", birthDate: "2002-03-15", education: "本科", address: "北京市海淀区", phone: "13800000001", registerDate: "2024-01-01", status: "正常" },
    { id: "R002", name: "李四", gender: "女", birthDate: "2001-05-10", education: "本科", address: "北京市朝阳区", phone: "13800000002", registerDate: "2024-01-05", status: "正常" },
    { id: "R003", name: "王五", gender: "男", birthDate: "2000-08-20", education: "硕士", address: "北京市丰台区", phone: "13800000003", registerDate: "2024-01-08", status: "正常" },
    { id: "R004", name: "赵六", gender: "女", birthDate: "2002-11-11", education: "本科", address: "北京市东城区", phone: "13800000004", registerDate: "2024-01-10", status: "正常" },
    { id: "R005", name: "孙七", gender: "男", birthDate: "1999-07-01", education: "硕士", address: "北京市西城区", phone: "13800000005", registerDate: "2024-01-12", status: "挂失" },
    { id: "R006", name: "周八", gender: "女", birthDate: "2001-09-09", education: "本科", address: "北京市昌平区", phone: "13800000006", registerDate: "2024-01-15", status: "停用" }
  ],
  borrows: [
    { id: 1, bookId: "B001", readerId: "R001", borrowDate: "2025-03-01", dueDate: "2025-03-15", returnDate: "2025-03-10", status: "已还", fine: 0 },
    { id: 2, bookId: "B004", readerId: "R001", borrowDate: "2025-03-05", dueDate: "2025-03-20", returnDate: "2025-03-18", status: "已还", fine: 0 },
    { id: 3, bookId: "B010", readerId: "R002", borrowDate: "2025-03-08", dueDate: "2025-03-22", returnDate: "2025-03-20", status: "已还", fine: 0 },
    { id: 4, bookId: "B003", readerId: "R003", borrowDate: "2025-03-10", dueDate: "2025-03-25", returnDate: "2025-03-23", status: "已还", fine: 0 },
    { id: 5, bookId: "B006", readerId: "R001", borrowDate: "2025-02-01", dueDate: "2025-02-15", returnDate: "2025-02-20", status: "已还", fine: 5 },
    { id: 6, bookId: "B001", readerId: "R002", borrowDate: "2025-02-10", dueDate: "2025-02-25", returnDate: "2025-03-01", status: "已还", fine: 10 },
    { id: 7, bookId: "B008", readerId: "R004", borrowDate: "2025-01-15", dueDate: "2025-01-30", returnDate: "2025-02-10", status: "已还", fine: 15 },
    { id: 8, bookId: "B007", readerId: "R003", borrowDate: "2026-06-01", dueDate: "2026-06-15", returnDate: null, status: "未还", fine: 0 },
    { id: 9, bookId: "B004", readerId: "R004", borrowDate: "2026-06-02", dueDate: "2026-06-16", returnDate: null, status: "未还", fine: 0 },
    { id: 10, bookId: "B009", readerId: "R002", borrowDate: "2026-06-03", dueDate: "2026-06-17", returnDate: null, status: "未还", fine: 0 },
    { id: 11, bookId: "B010", readerId: "R001", borrowDate: "2026-06-04", dueDate: "2026-06-18", returnDate: null, status: "未还", fine: 0 },
    { id: 12, bookId: "B002", readerId: "R005", borrowDate: "2025-04-01", dueDate: "2025-04-15", returnDate: null, status: "未还", fine: 20 },
    { id: 13, bookId: "B005", readerId: "R006", borrowDate: "2025-04-05", dueDate: "2025-04-20", returnDate: null, status: "未还", fine: 30 },
    { id: 14, bookId: "B008", readerId: "R003", borrowDate: "2025-04-08", dueDate: "2025-04-22", returnDate: null, status: "未还", fine: 25 },
    { id: 15, bookId: "B006", readerId: "R004", borrowDate: "2025-04-10", dueDate: "2025-04-25", returnDate: null, status: "未还", fine: 15 }
  ],
  logs: ["已载入 sql docs/INSERT.sql 测试数据"]
};

const storageKey = "bookBorrowFrontendDemo";
let state = loadState();
let activeView = "dashboard";
let bookSearchText = "";
let readerSearchText = "";
let typeFilter = "all";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return cloneInitialData();
  try {
    const parsed = JSON.parse(saved);
    return parsed.version === dataVersion ? parsed : cloneInitialData();
  } catch {
    return cloneInitialData();
  }
}

function cloneInitialData() {
  return structuredClone(initialData);
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function resetState() {
  state = cloneInitialData();
  saveState();
  fillDefaultDates();
  render();
  showToast("已恢复为 INSERT.sql 初始测试数据");
}

function logChange(text) {
  state.logs.unshift(`${new Date().toLocaleString("zh-CN")}：${text}`);
  state.logs = state.logs.slice(0, 8);
}

function escapeText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getType(id) {
  return state.types.find((item) => item.id === Number(id))?.name || "未分类";
}

function getPublisher(id) {
  return state.publishers.find((item) => item.id === Number(id))?.name || "未知出版社";
}

function getBook(id) {
  return state.books.find((item) => item.id === id);
}

function getReader(id) {
  return state.readers.find((item) => item.id === id);
}

function formatDate(dateText) {
  if (!dateText) return "未归还";
  return dateText.replaceAll("-", ".");
}

function dateOnly(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a, b) {
  const start = dateOnly(new Date(a));
  const end = dateOnly(new Date(b));
  return Math.round((end - start) / 86400000);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + Number(days));
  return next.toISOString().slice(0, 10);
}

function isOverdue(record) {
  return record.status === "未还" && daysBetween(record.dueDate, new Date()) > 0;
}

function matchesSearch(values, keyword) {
  const trimmedKeyword = keyword.trim().toLowerCase();
  if (!trimmedKeyword) return true;
  return values.some((value) => String(value).toLowerCase().includes(trimmedKeyword));
}

function nextCode(prefix, list) {
  const maxNumber = list.reduce((max, item) => {
    const match = String(item.id).match(/\d+$/);
    return match ? Math.max(max, Number(match[0])) : max;
  }, 0);
  return `${prefix}${String(maxNumber + 1).padStart(3, "0")}`;
}

function renderMetrics() {
  const totalBooks = state.books.reduce((sum, book) => sum + Number(book.total), 0);
  const available = state.books.reduce((sum, book) => sum + Number(book.available), 0);
  const active = state.borrows.filter((item) => item.status === "未还").length;
  const overdue = state.borrows.filter(isOverdue).length;

  $("#metricGrid").innerHTML = [
    metricCard("馆藏总量", totalBooks, "Book.TotalCount 汇总"),
    metricCard("当前可借", available, "Book.AvailableCount 汇总"),
    metricCard("未还记录", active, "BorrowRecord.Status = 未还", "warning"),
    metricCard("逾期提醒", overdue, "DueDate 早于今天且未还", "danger")
  ].join("");
}

function metricCard(title, value, note, tone = "") {
  return `
    <article class="metric-card ${tone}">
      <span>${escapeText(title)}</span>
      <strong>${escapeText(value)}</strong>
      <p class="meta">${escapeText(note)}</p>
    </article>
  `;
}

function renderAlerts() {
  const overdue = state.borrows.filter(isOverdue);
  const lowStock = state.books.filter((book) => Number(book.available) === 0);
  const abnormalReaders = state.readers.filter((reader) => reader.status !== "正常");
  const items = [
    ...overdue.map((record) => {
      const book = getBook(record.bookId);
      const reader = getReader(record.readerId);
      return alertItem("danger", `${reader.name} 的《${book.name}》已逾期`, `应还日期：${formatDate(record.dueDate)}，逾期 ${daysBetween(record.dueDate, new Date())} 天`);
    }),
    ...lowStock.map((book) => alertItem("warn", `《${book.name}》暂无可借库存`, `馆藏位置：${book.location}，TotalCount：${book.total}`)),
    ...abnormalReaders.map((reader) => alertItem("warn", `${reader.name} 状态为${reader.status}`, `借书证号：${reader.id}，借书登记时需拦截`))
  ];

  $("#alertList").innerHTML = items.length ? items.join("") : alertItem("warn", "暂无风险提醒", "所有未还记录和读者状态均正常。");
}

function alertItem(tone, title, detail) {
  return `
    <div class="alert-item ${tone}">
      <strong>${escapeText(title)}</strong>
      <p class="meta">${escapeText(detail)}</p>
    </div>
  `;
}

function renderAvailableBooks() {
  const books = state.books
    .filter((book) => Number(book.available) > 0)
    .sort((a, b) => Number(b.available) - Number(a.available))
    .slice(0, 4);

  $("#availableBooks").innerHTML = books.map((book) => `
    <div class="compact-item">
      <strong>${escapeText(book.name)}</strong>
      <p class="meta">${escapeText(getType(book.typeId))} · ${escapeText(book.author)} · 可借 ${book.available}/${book.total}</p>
    </div>
  `).join("");
}

function renderBooks() {
  const rows = state.books
    .filter((book) => typeFilter === "all" || String(book.typeId) === typeFilter)
    .filter((book) => matchesSearch([book.id, book.name, book.author, getType(book.typeId), getPublisher(book.publisherId), book.location, book.isbn], bookSearchText))
    .map((book) => {
      const available = Number(book.available);
      const statusClass = available === 0 ? "danger" : available <= 1 ? "warn" : "ok";
      const statusText = available === 0 ? "不可借" : available <= 1 ? "紧张" : "充足";
      return `
        <tr>
          <td>${escapeText(book.id)}</td>
          <td><strong>${escapeText(book.name)}</strong></td>
          <td>${escapeText(book.author)}</td>
          <td>${escapeText(getType(book.typeId))}</td>
          <td>${escapeText(getPublisher(book.publisherId))}</td>
          <td>${escapeText(book.total)}</td>
          <td><span class="status-badge ${statusClass}">${escapeText(book.available)} · ${statusText}</span></td>
          <td>${escapeText(book.location)}</td>
        </tr>
      `;
    });

  $("#booksTable").innerHTML = rows.length ? rows.join("") : `<tr><td colspan="8">没有匹配的图书记录</td></tr>`;
}

function renderReaders() {
  const cards = state.readers
    .filter((reader) => matchesSearch([reader.id, reader.name, reader.phone, reader.status, reader.education, reader.address], readerSearchText))
    .map((reader) => {
      const count = state.borrows.filter((record) => record.readerId === reader.id).length;
      const active = state.borrows.filter((record) => record.readerId === reader.id && record.status === "未还").length;
      const statusClass = reader.status === "正常" ? "ok" : reader.status === "挂失" ? "warn" : "danger";
      return `
        <article class="reader-card">
          <span class="status-badge ${statusClass}">${escapeText(reader.status)}</span>
          <h3>${escapeText(reader.name)}</h3>
          <p class="meta">${escapeText(reader.id)} · ${escapeText(reader.gender)} · ${escapeText(reader.education)}</p>
          <dl>
            <div><dt>联系电话</dt><dd>${escapeText(reader.phone)}</dd></div>
            <div><dt>办证日期</dt><dd>${escapeText(formatDate(reader.registerDate))}</dd></div>
            <div><dt>借阅次数</dt><dd>${count}</dd></div>
            <div><dt>当前未还</dt><dd>${active}</dd></div>
          </dl>
        </article>
      `;
    });

  $("#readerCards").innerHTML = cards.length ? cards.join("") : `<article class="reader-card"><h3>没有匹配的读者</h3></article>`;
}

function renderFormOptions() {
  const typeOptions = state.types.map((type) => `<option value="${type.id}">${escapeText(type.name)}</option>`).join("");
  const publisherOptions = state.publishers.map((publisher) => `<option value="${publisher.id}">${escapeText(publisher.name)}</option>`).join("");
  const readerOptions = state.readers.map((reader) => `
    <option value="${reader.id}" ${reader.status !== "正常" ? "disabled" : ""}>${escapeText(reader.id)} · ${escapeText(reader.name)} · ${escapeText(reader.status)}</option>
  `).join("");
  const allReaderOptions = state.readers.map((reader) => `
    <option value="${reader.id}">${escapeText(reader.id)} · ${escapeText(reader.name)} · ${escapeText(reader.status)}</option>
  `).join("");
  const availableBookOptions = state.books.map((book) => `
    <option value="${book.id}" ${Number(book.available) <= 0 ? "disabled" : ""}>${escapeText(book.id)} · ${escapeText(book.name)} · 可借 ${escapeText(book.available)}</option>
  `).join("");
  const allBookOptions = state.books.map((book) => `
    <option value="${book.id}">${escapeText(book.id)} · ${escapeText(book.name)} · ${escapeText(book.available)}/${escapeText(book.total)}</option>
  `).join("");

  $("#bookTypeInput").innerHTML = typeOptions;
  $("#publisherInput").innerHTML = publisherOptions;
  $("#readerSelect").innerHTML = readerOptions;
  $("#bookSelect").innerHTML = availableBookOptions;
  $("#statusReaderSelect").innerHTML = allReaderOptions;
  $("#inventoryBookSelect").innerHTML = allBookOptions;
}

function renderTypeFilter() {
  $("#typeFilter").innerHTML = `<option value="all">全部类型</option>` + state.types.map((type) => `
    <option value="${type.id}">${escapeText(type.name)}</option>
  `).join("");
  $("#typeFilter").value = typeFilter;
}

function renderBorrowRecords() {
  const activeRecords = state.borrows
    .filter((record) => record.status === "未还")
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  $("#unreturnedCount").textContent = `${activeRecords.length} 条未还`;
  $("#activeBorrowList").innerHTML = activeRecords.length ? activeRecords.map((record) => {
    const book = getBook(record.bookId);
    const reader = getReader(record.readerId);
    const overdue = isOverdue(record);
    const detail = overdue
      ? `逾期 ${daysBetween(record.dueDate, new Date())} 天，已有罚款 ${Number(record.fine).toFixed(2)} 元`
      : `应还日期：${formatDate(record.dueDate)}`;
    return `
      <div class="record-item">
        <div>
          <strong>${escapeText(reader.name)} 借阅《${escapeText(book.name)}》</strong>
          <p class="meta">${escapeText(record.id)} · ${escapeText(formatDate(record.borrowDate))} 借出 · ${escapeText(detail)}</p>
        </div>
        <button type="button" data-return="${record.id}">登记还书</button>
      </div>
    `;
  }).join("") : `<div class="record-item"><div><strong>暂无未还记录</strong><p class="meta">可以通过左侧表单登记新的借阅。</p></div></div>`;
}

function renderStats() {
  const typeCounts = state.types.map((type) => ({
    name: type.name,
    count: state.books.filter((book) => Number(book.typeId) === type.id).reduce((sum, book) => sum + Number(book.total), 0)
  }));
  const maxCount = Math.max(...typeCounts.map((item) => item.count), 1);
  $("#typeChart").innerHTML = typeCounts.map((item) => `
    <div class="bar-row">
      <strong>${escapeText(item.name)}</strong>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round((item.count / maxCount) * 100)}%"></div></div>
      <span class="meta">${escapeText(item.count)}</span>
    </div>
  `).join("");

  const hotBooks = state.books.map((book) => ({
    book,
    count: state.borrows.filter((record) => record.bookId === book.id).length
  })).filter((item) => item.count > 0).sort((a, b) => b.count - a.count).slice(0, 5);

  $("#hotBooks").innerHTML = hotBooks.map((item, index) => `
    <div class="rank-item">
      <span class="rank-no">${index + 1}</span>
      <div>
        <strong>${escapeText(item.book.name)}</strong>
        <p class="meta">${escapeText(item.book.author)} · ${escapeText(item.book.location)}</p>
      </div>
      <span class="status-badge ok">${item.count} 次</span>
    </div>
  `).join("");

  const readerRank = state.readers.map((reader) => ({
    reader,
    count: state.borrows.filter((record) => record.readerId === reader.id).length
  })).sort((a, b) => b.count - a.count).slice(0, 6);

  $("#readerRank").innerHTML = readerRank.map((item, index) => `
    <div class="rank-item">
      <span class="rank-no">${index + 1}</span>
      <div>
        <strong>${escapeText(item.reader.name)}</strong>
        <p class="meta">${escapeText(item.reader.id)} · ${escapeText(item.reader.status)}</p>
      </div>
      <span class="status-badge ok">${item.count} 次</span>
    </div>
  `).join("");

  $("#changeLog").innerHTML = state.logs.map((item, index) => `
    <div class="rank-item">
      <span class="rank-no">${index + 1}</span>
      <div><strong>${escapeText(item)}</strong></div>
    </div>
  `).join("");
}

function addBook(event) {
  event.preventDefault();
  const id = $("#bookIdInput").value.trim().toUpperCase();
  const total = Number($("#totalCountInput").value);
  const available = Number($("#availableCountInput").value);

  if (state.books.some((book) => book.id === id)) {
    showToast("图书编号已存在");
    return;
  }
  if (available > total) {
    showToast("当前可借数量不能大于馆藏总量");
    return;
  }

  const book = {
    id,
    isbn: $("#isbnInput").value.trim(),
    name: $("#bookNameInput").value.trim(),
    author: $("#authorInput").value.trim(),
    publishDate: $("#publishDateInput").value,
    typeId: Number($("#bookTypeInput").value),
    publisherId: Number($("#publisherInput").value),
    pages: Number($("#pageCountInput").value),
    price: Number($("#priceInput").value),
    total,
    available,
    location: $("#locationInput").value.trim()
  };

  state.books.push(book);
  logChange(`新增图书 ${book.id}《${book.name}》`);
  saveState();
  $("#bookForm").reset();
  fillDefaultDates();
  render();
  showToast("图书已添加");
}

function updateInventory(event) {
  event.preventDefault();
  const book = getBook($("#inventoryBookSelect").value);
  const total = Number($("#inventoryTotalInput").value);
  const available = Number($("#inventoryAvailableInput").value);

  if (!book) return;
  if (available > total) {
    showToast("当前可借数量不能大于馆藏总量");
    return;
  }

  book.total = total;
  book.available = available;
  logChange(`更新《${book.name}》库存为 ${available}/${total}`);
  saveState();
  render();
  showToast("库存已更新");
}

function addReader(event) {
  event.preventDefault();
  const id = $("#readerIdInput").value.trim().toUpperCase();

  if (state.readers.some((reader) => reader.id === id)) {
    showToast("借书证号已存在");
    return;
  }

  const reader = {
    id,
    name: $("#readerNameInput").value.trim(),
    gender: $("#genderInput").value,
    birthDate: $("#birthDateInput").value,
    education: $("#educationInput").value.trim(),
    address: $("#addressInput").value.trim(),
    phone: $("#phoneInput").value.trim(),
    registerDate: $("#registerDateInput").value,
    status: $("#readerStatusInput").value
  };

  state.readers.push(reader);
  logChange(`新增读者 ${reader.id} ${reader.name}`);
  saveState();
  $("#readerForm").reset();
  fillDefaultDates();
  render();
  showToast("读者已添加");
}

function updateReaderStatus(event) {
  event.preventDefault();
  const reader = getReader($("#statusReaderSelect").value);
  const newStatus = $("#newStatusSelect").value;

  if (!reader) return;
  reader.status = newStatus;
  logChange(`更新读者 ${reader.id} ${reader.name} 状态为${newStatus}`);
  saveState();
  render();
  showToast("读者状态已更新");
}

function registerBorrow(event) {
  event.preventDefault();
  const readerId = $("#readerSelect").value;
  const bookId = $("#bookSelect").value;
  const days = Number($("#borrowDays").value || 14);
  const reader = getReader(readerId);
  const book = getBook(bookId);

  if (!reader || reader.status !== "正常") {
    showToast("该读者状态不是正常，不能借书");
    return;
  }
  if (!book || Number(book.available) <= 0) {
    showToast("该图书当前没有可借数量");
    return;
  }

  const today = todayString();
  const nextId = Math.max(...state.borrows.map((item) => Number(item.id)), 0) + 1;
  state.borrows.push({
    id: nextId,
    bookId,
    readerId,
    borrowDate: today,
    dueDate: addDays(today, days),
    returnDate: null,
    status: "未还",
    fine: 0
  });
  book.available = Number(book.available) - 1;
  logChange(`${reader.name} 借阅《${book.name}》`);
  saveState();
  render();
  showToast(`已登记：${reader.name} 借阅《${book.name}》`);
}

function returnBook(recordId) {
  const record = state.borrows.find((item) => Number(item.id) === Number(recordId));
  if (!record || record.status === "已还") return;

  const book = getBook(record.bookId);
  const reader = getReader(record.readerId);
  const overdueDays = Math.max(0, daysBetween(record.dueDate, new Date()));
  record.returnDate = todayString();
  record.status = "已还";
  record.fine = Math.max(Number(record.fine), overdueDays);
  book.available = Math.min(Number(book.total), Number(book.available) + 1);
  logChange(`${reader.name} 归还《${book.name}》，罚款 ${Number(record.fine).toFixed(2)} 元`);
  saveState();
  render();
  showToast(`已还书，罚款金额 ${Number(record.fine).toFixed(2)} 元`);
}

function syncInventoryInputs() {
  const book = getBook($("#inventoryBookSelect").value);
  if (!book) return;
  $("#inventoryTotalInput").value = book.total;
  $("#inventoryAvailableInput").value = book.available;
}

function fillDefaultDates() {
  const today = todayString();
  if ($("#publishDateInput")) $("#publishDateInput").value = today;
  if ($("#birthDateInput")) $("#birthDateInput").value = "2002-01-01";
  if ($("#registerDateInput")) $("#registerDateInput").value = today;
  if ($("#bookIdInput")) $("#bookIdInput").value = nextCode("B", state.books);
  if ($("#readerIdInput")) $("#readerIdInput").value = nextCode("R", state.readers);
  syncInventoryInputs();
}

function renderDate() {
  $("#todayText").textContent = `今天：${new Date().toLocaleDateString("zh-CN")}`;
}

function render() {
  renderDate();
  renderMetrics();
  renderAlerts();
  renderAvailableBooks();
  renderTypeFilter();
  renderFormOptions();
  renderBooks();
  renderReaders();
  renderBorrowRecords();
  renderStats();
  syncInventoryInputs();
}

function showView(viewName) {
  activeView = viewName;
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewName));
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function bindEvents() {
  $$(".nav-item").forEach((item) => {
    item.addEventListener("click", () => showView(item.dataset.view));
  });

  $("#bookSearch").addEventListener("input", (event) => {
    bookSearchText = event.target.value;
    renderBooks();
  });

  $("#readerSearch").addEventListener("input", (event) => {
    readerSearchText = event.target.value;
    renderReaders();
  });

  $("#typeFilter").addEventListener("change", (event) => {
    typeFilter = event.target.value;
    renderBooks();
  });

  $("#bookForm").addEventListener("submit", addBook);
  $("#inventoryForm").addEventListener("submit", updateInventory);
  $("#readerForm").addEventListener("submit", addReader);
  $("#readerStatusForm").addEventListener("submit", updateReaderStatus);
  $("#borrowForm").addEventListener("submit", registerBorrow);
  $("#resetDemo").addEventListener("click", resetState);
  $("#inventoryBookSelect").addEventListener("change", syncInventoryInputs);

  $("#activeBorrowList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-return]");
    if (button) returnBook(button.dataset.return);
  });
}

bindEvents();
render();
fillDefaultDates();
showView(activeView);
