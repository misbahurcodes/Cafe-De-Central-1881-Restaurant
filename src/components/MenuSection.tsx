import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Plus, Minus, ShoppingBag, X, Send, Check, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORY_GROUPS, MenuItem } from '../data/menuData';

interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [showSignaturesOnly, setShowSignaturesOnly] = useState<boolean>(false);
  const [orderItems, setOrderItems] = useState<{ [id: string]: number }>({});
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [orderSubmittedNotice, setOrderSubmittedNotice] = useState<boolean>(false);

  // Filtered menu items calculation
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'All' && item.categoryGroup !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter === 'veg' && item.dietary !== 'veg') {
        return false;
      }
      if (dietaryFilter === 'non-veg' && item.dietary === 'veg') {
        return false;
      }
      // Signature only
      if (showSignaturesOnly && !item.isSignature) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesCat;
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, showSignaturesOnly, searchQuery]);

  // Order management
  const addToOrder = (id: string) => {
    setOrderItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromOrder = (id: string) => {
    setOrderItems((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const totalItemCount = useMemo(() => {
    return Object.values(orderItems).reduce((sum, count) => sum + count, 0);
  }, [orderItems]);

  const totalBillEstimate = useMemo(() => {
    return Object.entries(orderItems).reduce((sum, [id, count]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      return sum + (item ? item.price * count : 0);
    }, 0);
  }, [orderItems]);

  const assembledOrderList = useMemo(() => {
    return Object.entries(orderItems)
      .map(([id, count]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? { item, quantity: count } : null;
      })
      .filter((entry): entry is OrderItem => entry !== null);
  }, [orderItems]);

  const handleSendWhatsAppOrder = () => {
    if (assembledOrderList.length === 0) return;

    let message = `*Cafe De Central 1881 - Order Inquiry*\n`;
    message += `Location: Platform 1, Kurseong Station\n`;
    message += `---------------------------------\n`;
    assembledOrderList.forEach(({ item, quantity }) => {
      message += `• ${quantity}x ${item.name} - ₹${item.price * quantity}\n`;
    });
    message += `---------------------------------\n`;
    message += `*Total Estimate:* ₹${totalBillEstimate}\n\n`;
    message += `Kindly confirm availability and preparation time. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919832340454?text=${encoded}`, '_blank');
    setOrderSubmittedNotice(true);
    setTimeout(() => setOrderSubmittedNotice(false), 5000);
  };

  return (
    <section id="menu" className="py-24 bg-[#0b231a] text-[#ede4d3] relative">
      {/* Background subtleties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]" />
            <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase">
              Culinary Collection
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3ea] tracking-tight mb-4">
            The Digital Heritage Menu
          </h2>
          <p className="text-sm sm:text-base text-[#d5cbba]">
            Explore authentic offerings crafted with high-mountain ingredients, traditional recipes, and original prices.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#081c15] border border-[#1a4435] rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#c5a059] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search teas, momos, sizzlers, biryani, mutton specials..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#0b231a] border border-[#1a4435] focus:border-[#c5a059] rounded-xl text-[#f7f3ea] placeholder-[#d5cbba]/50 focus:outline-none focus:ring-1 focus:ring-[#c5a059] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#d5cbba] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Dietary Filters & Signature Toggle */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Segmented Dietary Filter */}
              <div className="flex items-center p-1 bg-[#0b231a] rounded-lg border border-[#1a4435]">
                <button
                  type="button"
                  onClick={() => setDietaryFilter('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    dietaryFilter === 'all'
                      ? 'bg-[#c5a059] text-[#081c15] font-semibold'
                      : 'text-[#d5cbba] hover:text-[#f7f3ea]'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('veg')}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-700 text-white font-semibold'
                      : 'text-[#d5cbba] hover:text-[#f7f3ea]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Pure Veg
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-red-800 text-white font-semibold'
                      : 'text-[#d5cbba] hover:text-[#f7f3ea]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  Non-Veg
                </button>
              </div>

              {/* Signatures Only Toggle */}
              <button
                type="button"
                onClick={() => setShowSignaturesOnly(!showSignaturesOnly)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border transition-all whitespace-nowrap ${
                  showSignaturesOnly
                    ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#dfb76c]'
                    : 'bg-[#0b231a] border-[#1a4435] text-[#d5cbba] hover:text-[#f7f3ea]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Chef's Signatures</span>
              </button>
            </div>
          </div>

          {/* Category Tabs (Horizontal Scrollable) */}
          <div className="mt-5 pt-4 border-t border-[#1a4435]/60 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {MENU_CATEGORY_GROUPS.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-[#c5a059] text-[#081c15] font-semibold border-[#c5a059] shadow-sm'
                      : 'bg-[#0b231a] text-[#d5cbba] border-[#1a4435] hover:border-[#c5a059]/50 hover:text-[#f7f3ea]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Active Category Label */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#d5cbba]/80">
          <div className="flex items-center gap-2">
            <span>Showing <strong className="text-[#f7f3ea]">{filteredItems.length}</strong> creations</span>
            {selectedCategory !== 'All' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#c5a059] font-medium">{selectedCategory}</span>
              </>
            )}
          </div>
          {totalItemCount > 0 && (
            <button
              type="button"
              onClick={() => setIsOrderDrawerOpen(true)}
              className="flex items-center gap-2 text-[#dfb76c] hover:underline"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Table Order ({totalItemCount} items · ₹{totalBillEstimate})</span>
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#081c15] border border-[#1a4435] rounded-2xl">
            <UtensilsCrossed className="w-10 h-10 text-[#c5a059]/50 mx-auto mb-3" />
            <h3 className="font-serif-vintage text-xl font-semibold text-[#f7f3ea] mb-1">
              No matching dishes found
            </h3>
            <p className="text-xs text-[#d5cbba] max-w-sm mx-auto mb-4">
              Try adjusting your search terms or clearing the dietary filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setDietaryFilter('all');
                setShowSignaturesOnly(false);
              }}
              className="px-4 py-2 text-xs font-semibold text-[#081c15] bg-[#c5a059] rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const qtyInOrder = orderItems[dish.id] || 0;
              return (
                <div
                  key={dish.id}
                  className={`group relative rounded-2xl bg-[#081c15] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    dish.isSignature
                      ? 'border-[#c5a059]/40 hover:border-[#c5a059] shadow-lg shadow-black/30'
                      : 'border-[#1a4435] hover:border-[#1a4435]/80'
                  }`}
                >
                  {/* Optional Dish Hero Image if available */}
                  {dish.image && (
                    <div className="h-44 w-full overflow-hidden relative">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Dietary Indicator & Category */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          {/* Standard Indian Veg/Non-Veg symbol */}
                          <span
                            className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                              dish.dietary === 'veg'
                                ? 'border-emerald-500'
                                : dish.dietary === 'egg'
                                ? 'border-amber-500'
                                : 'border-red-500'
                            }`}
                            title={dish.dietary.toUpperCase()}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                dish.dietary === 'veg'
                                  ? 'bg-emerald-500'
                                  : dish.dietary === 'egg'
                                  ? 'bg-amber-500'
                                  : 'bg-red-500'
                              }`}
                            />
                          </span>
                          <span className="text-[11px] font-medium text-[#c5a059] tracking-wider uppercase">
                            {dish.category}
                          </span>
                        </div>

                        {dish.isSignature && (
                          <span className="text-[10px] font-cinzel font-semibold text-[#dfb76c] flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-[#dfb76c]" />
                            Signature
                          </span>
                        )}
                      </div>

                      {/* Dish Name */}
                      <h3 className="font-serif-vintage text-lg font-semibold text-[#f7f3ea] group-hover:text-[#dfb76c] transition-colors leading-snug mb-2">
                        {dish.name}
                      </h3>

                      {/* Authentic Description */}
                      <p className="text-xs text-[#d5cbba] leading-relaxed line-clamp-3 mb-4">
                        {dish.description}
                      </p>
                    </div>

                    {/* Price and Add to Order Bar */}
                    <div className="pt-3 border-t border-[#1a4435]/60 flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-[#c5a059] font-medium">₹</span>
                        <span className="font-serif-vintage text-xl font-bold text-[#f7f3ea] tabular-nums">
                          {dish.price}
                        </span>
                      </div>

                      {/* Interactive Add / Counter button */}
                      {qtyInOrder === 0 ? (
                        <button
                          type="button"
                          onClick={() => addToOrder(dish.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-lg transition-all shadow-sm"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Table</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-[#0b231a] border border-[#c5a059]/40 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => removeFromOrder(dish.id)}
                            className="p-1 text-[#d5cbba] hover:text-white rounded hover:bg-[#1a4435]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#c5a059] px-1 tabular-nums">
                            {qtyInOrder}
                          </span>
                          <button
                            type="button"
                            onClick={() => addToOrder(dish.id)}
                            className="p-1 text-[#d5cbba] hover:text-white rounded hover:bg-[#1a4435]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Floating Bottom Order Strip when items selected */}
      {totalItemCount > 0 && !isOrderDrawerOpen && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-lg bg-[#081c15] border border-[#c5a059] rounded-2xl p-4 shadow-2xl flex items-center justify-between">
          <div>
            <div className="text-xs text-[#d5cbba]">Table Order Selection</div>
            <div className="text-sm font-semibold text-[#f7f3ea]">
              <span className="tabular-nums">{totalItemCount} items</span> · <span className="text-[#dfb76c] tabular-nums">₹{totalBillEstimate}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOrderDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-xl transition-all shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Review & Order</span>
          </button>
        </div>
      )}

      {/* Table Order Review Drawer */}
      {isOrderDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOrderDrawerOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md bg-[#081c15] border-l border-[#1a4435] p-6 shadow-2xl flex flex-col justify-between h-full overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1a4435]">
                <div>
                  <h3 className="font-serif-vintage text-xl font-bold text-[#f7f3ea]">
                    Table Order Inquiry
                  </h3>
                  <p className="text-xs text-[#d5cbba]">
                    Kurseong Station Platform 1
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOrderDrawerOpen(false)}
                  className="p-1.5 text-[#d5cbba] hover:text-white rounded-lg hover:bg-[#1a4435]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {assembledOrderList.length === 0 ? (
                <div className="py-16 text-center text-xs text-[#d5cbba]">
                  No items in your table order yet.
                </div>
              ) : (
                <div className="py-4 space-y-3">
                  {assembledOrderList.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#0b231a] border border-[#1a4435] flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-[#f7f3ea] truncate">
                          {item.name}
                        </h4>
                        <div className="text-[11px] text-[#c5a059] tabular-nums">
                          ₹{item.price} each · Subtotal: ₹{item.price * quantity}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-[#081c15] border border-[#1a4435] rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => removeFromOrder(item.id)}
                          className="p-1 text-[#d5cbba] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-[#f7f3ea] px-1 tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => addToOrder(item.id)}
                          className="p-1 text-[#d5cbba] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Total and Dispatch Button */}
            {assembledOrderList.length > 0 && (
              <div className="pt-4 border-t border-[#1a4435] space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#d5cbba]">Estimated Total</span>
                  <span className="font-serif-vintage text-2xl font-bold text-[#dfb76c] tabular-nums">
                    ₹{totalBillEstimate}
                  </span>
                </div>
                <p className="text-[11px] text-[#d5cbba]/70">
                  Prices are inclusive of kitchen preparation. Dine-in and take-away service available right on Platform 1.
                </p>

                <button
                  type="button"
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-3 px-4 text-xs font-bold text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Order to WhatsApp (+91 98323 40454)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderItems({})}
                  className="w-full py-2 text-center text-xs text-[#d5cbba] hover:text-red-400 transition-colors"
                >
                  Clear Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WhatsApp Sent Feedback Notification */}
      {orderSubmittedNotice && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-900 border border-emerald-500 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs">
          <Check className="w-4 h-4 text-emerald-300" />
          <span>Opening WhatsApp to place your order with Cafe De Central 1881!</span>
        </div>
      )}
    </section>
  );
};
