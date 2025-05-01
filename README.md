# 🔒 Cache Strategies Overview

## 🔁 LRU (Least Recently Used)
- **Evicts**: the least recently accessed item.
- **Use Cases**: browsers, in-memory caches (e.g., Node.js), Redis (via `maxmemory-policy`).
- **Typical Implementation**: `Map + Set` or `LinkedHashMap`.

---

## 🆕 MRU (Most Recently Used)
- **Evicts**: the most recently accessed item.
- **Use Cases**: niche scenarios where newer items are less valuable, such as certain transaction systems.
- **Notes**: less common than LRU.

---

## 🧠 LFU (Least Frequently Used)
- **Evicts**: the item with the lowest access frequency over time.
- **Use Cases**: CDNs, Redis (`volatile-lfu` policy), OS memory managers.
- **Requires**: frequency tracking and additional data structures (may be O(log n) or O(1) with optimization).

---

## ⏰ TTL (Time-to-Live) Cache
- **Evicts**: items after a fixed expiration time.
- **Use Cases**: DNS caching, REST API responses, distributed caching systems.
- **Implementation**: often via timestamps + periodic cleanup or `setTimeout`.

---

## 🧼 FIFO (First-In, First-Out)
- **Evicts**: the oldest inserted item, regardless of access.
- **Use Cases**: simple cache systems, embedded devices.
- **Simple to implement**, but may evict still-active items.

---

## 🔁 ARC (Adaptive Replacement Cache)
- **Evicts**: dynamically based on a balance of recency and frequency.
- **Use Cases**: high-end storage systems like ZFS, where caching needs to adapt.
- **Combines**: LRU + LFU with adaptive control.
- **Advanced**, but very effective.

---

## 📝 Write-through / Write-back / Refreshing Cache (based on data sync behavior)

### Write-through
- Writes data to both the cache and the underlying source immediately.
- ✅ Consistent but slower on writes.

### Write-back
- Writes only to the cache first, and asynchronously to the source later.
- ⚠️ Higher performance, but risk of data loss on failure.

### Refreshing Cache
- Periodically refreshes cache entries in the background, even if not accessed.
- Useful when cache freshness is critical.

---

## 🔚 Summary

| Strategy      | Eviction Rule           | Best Used In                      |
|---------------|--------------------------|-----------------------------------|
| **LRU**       | Least recently used     | Browsers, Redis, in-memory caches |
| **MRU**       | Most recently used      | Transaction-heavy systems         |
| **LFU**       | Least frequently used   | CDNs, Redis advanced modes        |
| **TTL**       | Expired items           | DNS, REST APIs                    |
| **FIFO**      | Oldest inserted         | Simple/embedded systems           |
| **ARC**       | Adaptive (LRU + LFU)    | File systems, storage caching     |

